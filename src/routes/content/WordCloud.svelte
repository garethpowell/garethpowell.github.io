<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
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
        return new Promise((resolve, reject) => {
            if (typeof window !== 'undefined' && (window as any).WordCloud) return resolve();
            if (typeof document === 'undefined') return resolve();
            const script = document.createElement('script');
            script.src = '/wordcloud.js';
            script.async = true;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error('Failed to load /wordcloud.js'));
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
            const res = await fetch(dataUrl, { cache: 'no-store' });
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

    let resizeTO: any;

    function handleResize() {
        clearTimeout(resizeTO);
        resizeTO = setTimeout(renderCloud, 200);
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

    onMount(async () => {
        await ensureWordCloudLoaded();
        await loadData();
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


<div class="container col-12 px-4 py-5">
    <div class="row align-items-center g-5 py-5">
        <div class="col">

            <div class="wc-container mb-5 ms-5 py-5" bind:this={containerEl}>
                <div id="wordcloud" class="wc-canvas" style={`height:${height}px`} role="img" aria-label="Interactive word cloud; click a term to navigate" bind:this={canvasHostEl}></div>
                <div class="legend">Tip: Click a word to open its link in a new tab.</div>
            </div>

        </div>
    </div>
</div>



<style>
    .wc-container { max-width: 1000px; margin: 0 auto; padding: 16px 20px; }
    .wc-canvas { width: 100%; background: var(--cloud-bg, #f8fafc); border: 1px solid var(--cloud-border, #e2e8f0); border-radius: 16px; position: relative; overflow: hidden; }
    /*.toolbar { display: flex; gap: 12px; align-items: center; margin-bottom: 12px; flex-wrap: wrap; }*/
    /*.btn { appearance: none; border: 1px solid var(--cloud-border, #e2e8f0); background: white; padding: 8px 12px; border-radius: 9999px; cursor: pointer; font-weight: 600; }*/
    /*.btn:hover { border-color: var(--brand, #2563eb); color: var(--brand, #2563eb); }*/
    /*.status { font-size: 12px; color: #475569; margin-left: auto; }*/
    /*.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }*/
    .legend { font-size: 12px; color: var(--white-50); margin-top: 8px; }
</style>