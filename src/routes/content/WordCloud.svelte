<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { resolve } from '$app/paths';
    import SectionBackground from "$lib/components/SectionBackground.svelte";
    // Props for flexibility
    let { dataUrl = '/words.json', height = 520, options = {} } = $props<{
        dataUrl?: string;
        height?: number;
        options?: Record<string, any>;
    }>();

    let containerEl: HTMLDivElement | null = null;
    let canvasHostEl: HTMLDivElement | null = null;
    let shuffleBtnEl: HTMLButtonElement | null = null;
    let downloadBtnEl: HTMLButtonElement | null = null;
    let searchInputEl: HTMLInputElement | null = null;

    let status = 'Loading…';

    // Internal data
    let fullDataset: Array<{ text: string; weight: number; url?: string | null; color?: string | null; rotate?: boolean }>= [];
    let currentList: any[] = [];

    // Ensure the wordcloud script is available (loaded from /static/wordcloud.js by SvelteKit at /wordcloud.js)
    function ensureWordCloudLoaded(): Promise<void> {
        return new Promise((res, rej) => {
            if (typeof window !== 'undefined' && (window as any).WordCloud) return res();
            if (typeof document === 'undefined') return res();
            const script = document.createElement('script');
            script.src = resolve('/wordcloud.js');
            script.async = true;
            script.onload = () => res();
            script.onerror = () => rej(new Error('Failed to load wordcloud.js'));
            document.head.appendChild(script);
        });
    }

    function resolveCloudBg(): string {
        if (typeof window === 'undefined') return '#f8fafc';
        try {
            const v = getComputedStyle(document.documentElement).getPropertyValue('--cloud-bg');
            return v?.trim() || '#f8fafc';
        } catch {
            return '#f8fafc';
        }
    }

    const CLOUD_OPTIONS = {
        gridSize: 24,
        weightFactor: (size: number) => Math.max(12, Math.min(64, size * 1.2)),
        rotateRatio: 0.25,
        rotationSteps: 2,
        backgroundColor: '#f8fafc',
        drawOutOfBound: false,
        shrinkToFit: true,
        fontFamily: 'JetBrains Mono',
        click: (item: any[]) => {
            const url = item?.[2];
            if (url) window.open(url, '_blank', 'noopener,noreferrer');
        },
        hover: (item: any[] | null) => {
            if (item) {
                status = `${item[0]} (${item[1]})`;
            } else {
                status = 'Ready';
            }
        }
    } as Record<string, any>;

    function normalizeItem(item: any) {
        if (!item || !item.text) return null;
        const text = String(item.text);
        const weight = Number(item.weight ?? 1);
        const url = item.url ? String(item.url) : null;
        const color = item.color || null;
        const rotate = !!item.rotate;
        return { text, weight: Number.isFinite(weight) ? weight : 1, url, color, rotate };
    }

    function toWordCloudList(data: any[]) {
        return data.map(({ text, weight, url, color, rotate }) => [text, weight, url, color, rotate]);
    }

    function computeRotateRatio() {
        const explicit = fullDataset.filter((d) => d.rotate === false).length;
        if (explicit > fullDataset.length * 0.6) return 0;
        return CLOUD_OPTIONS.rotateRatio;
    }

    function renderCloud() {
        if (!canvasHostEl) return;
        canvasHostEl.innerHTML = '';
        const opts: Record<string, any> = { ...CLOUD_OPTIONS, ...options };
        opts.backgroundColor = resolveCloudBg();
        opts.list = currentList;
        opts.color = (word: string) => {
            const item = fullDataset.find((i) => i.text === word);
            return item?.color || undefined;
        };
        opts.rotateRatio = computeRotateRatio();
        if (typeof window !== 'undefined' && (window as any).WordCloud) {
            (window as any).WordCloud(canvasHostEl, opts);
        }
    }

    async function loadData() {
        status = 'Loading…';
        try {
            const url = /^https?:\/\//i.test(dataUrl) || dataUrl.startsWith('//') ? dataUrl : resolve(dataUrl);
            const res = await fetch(url, { cache: 'no-store' });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const json = await res.json();
            if (!Array.isArray(json)) throw new Error('Invalid JSON: expected an array');
            fullDataset = json.map(normalizeItem).filter(Boolean);
            currentList = toWordCloudList(fullDataset);
            renderCloud();
            status = 'Ready';
        } catch (err) {
            console.error(err);
            status = 'Failed to load data';
        }
    }

    function shuffleArray<T>(arr: T[]): T[] {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // Responsive height and lazy rendering
    function computeHeight() {
        if (typeof window === 'undefined') return height;
        const vw = Math.min(window.innerWidth, 600);
        return Math.max(280, Math.min(520, Math.round(vw * 0.8)));
    }
    let effectiveHeight = height;
    let hasRendered = false;

    function setupObserver() {
        if (!containerEl || typeof IntersectionObserver === 'undefined') return renderNow();
        const io = new IntersectionObserver((entries) => {
            if (entries.some((e) => e.isIntersecting)) {
                io.disconnect();
                renderNow();
            }
        }, { rootMargin: '200px' });
        io.observe(containerEl);
    }

    async function renderNow() {
        if (hasRendered) return;
        hasRendered = true;
        await ensureWordCloudLoaded();
        await loadData();
    }

    let resizeTO: any;
    function handleResize() {
        clearTimeout(resizeTO);
        resizeTO = setTimeout(() => {
            effectiveHeight = computeHeight();
            renderCloud();
        }, 200);
    }

    function onShuffle() {
        currentList = shuffleArray(currentList.slice());
        renderCloud();
    }

    function onDownload() {
        const canvas = canvasHostEl?.querySelector('canvas') as HTMLCanvasElement | null;
        if (!canvas) return;
        const a = document.createElement('a');
        a.href = canvas.toDataURL('image/png');
        a.download = 'wordcloud.png';
        a.click();
    }

    function onSearch(e: Event) {
        const target = e.target as HTMLInputElement;
        const q = target.value.trim().toLowerCase();
        const filtered = q ? fullDataset.filter((d) => d.text.toLowerCase().includes(q)) : fullDataset;
        currentList = toWordCloudList(filtered);
        renderCloud();
    }

    onMount(() => {
        effectiveHeight = computeHeight();
        setupObserver();
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
        }
    });

    onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', handleResize);
        }
        if (typeof resizeTO !== 'undefined' && resizeTO) {
            clearTimeout(resizeTO);
        }
    });
</script>

<br/>

<SectionBackground
        variant="blobs"
        classes="text-white py-5"
>
    <h2 class="py-4">Technologies & Tools</h2>
    <div class="row align-items-center g-4 g-lg-5">
        <div class="col-12">
            <div class="wc-container mb-3" bind:this={containerEl}>
                <div id="wordcloud" class="wc-canvas" style={`height:${effectiveHeight}px`} role="img" aria-label="Interactive word cloud; click a term to navigate" bind:this={canvasHostEl}></div>
                <div class="legend">Tip: Click a word to open its link in a new tab.</div>
            </div>
        </div>
    </div>
</SectionBackground>

<style>
    .wc-container { max-width: 1000px; margin: 0 auto; padding: 8px 12px; }
    .wc-canvas { width: 100%; background: var(--cloud-bg, #f8fafc); border: 1px solid var(--cloud-border, #e2e8f0); border-radius: 16px; position: relative; overflow: hidden; }
    .legend { font-size: 12px; color: var(--white-50); margin-top: 8px; }
</style>