<script lang="ts">
    import { resolve } from "$app/paths";

    export let file: string = "Gareth_Powell_CV_2025.pdf"
    export let label: string = "Download Resumé";
    export let ariaLabel: string = "Download CV for Gareth Powell";
    export let classes: string = "d-grid d-sm-inline-flex gap-2 py-5";
    export let btnClass: string = "btn btn-glass";
</script>

<div class={classes}>
    <a
            href={resolve(`/cv/${file}`)}
            class={btnClass}
            download
            aria-label={ariaLabel}
    >{label}</a
    >
</div>