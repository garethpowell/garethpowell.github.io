<script lang="ts">
    let opacity = 0.60;
    let blur = 24;
    let radius = 16;
</script>

<div class="row g-4">
    <div class="col-12 col-lg-6">
        <div
                class="card"
                style={`--lg-opacity:${opacity}; --lg-blur:${blur}px; --lg-radius:${radius}px`}
        >
            <div class="card-body">
                <h2 class="h5">Liquid Glass Card</h2>
                <p class="mb-3">
                    Translucent surface with hairline borders and soft elevation.
                    Tweak the sliders to see live changes.
                </p>

                <div class="row gy-3">
                    <div class="col-12">
                        <label class="form-label" for="opacity">Opacity ({opacity})</label>
                        <input id="opacity" class="form-range" type="range" min="0.4" max="0.9" step="0.01" bind:value={opacity} />
                    </div>
                    <div class="col-12">
                        <label class="form-label" for="blur">Blur ({blur}px)</label>
                        <input id="blur" class="form-range" type="range" min="8" max="40" step="1" bind:value={blur} />
                    </div>
                    <div class="col-12">
                        <label class="form-label" for="radius">Radius ({radius}px)</label>
                        <input id="radius" class="form-range" type="range" min="8" max="24" step="1" bind:value={radius} />
                    </div>
                </div>

                <div class="mt-3">
                    <button class="btn btn-glass me-2">Glass Button</button>
                    <button class="btn btn-primary">Primary</button>
                </div>
            </div>
        </div>
    </div>

    <div class="col-12 col-lg-6">
        <div class="card">
            <div class="card-body">
                <h2 class="h5">Standard Bootstrap Card</h2>
                <p class="mb-3">
                    Because the page is inside <code>.lg-glass</code>, standard components adopt the glass look automatically.
                </p>

                <ul class="list-group mb-3">
                    <li class="list-group-item d-flex justify-content-between">
                        Item A <span class="badge text-bg-primary rounded-pill">12</span>
                    </li>
                    <li class="list-group-item">Item B</li>
                    <li class="list-group-item">Item C</li>
                </ul>

                <div class="input-group">
                    <span class="input-group-text">@</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
                </div>
            </div>
        </div>
    </div>
</div>
