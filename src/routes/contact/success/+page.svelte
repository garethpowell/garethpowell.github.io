<svelte:head>
    <title>Thanks — I’ll be in touch | Clean Code Solutions</title>
    <meta name="description" content="Thanks for your message. I’ll respond promptly regarding your Java/Kotlin needs." />
</svelte:head>

<script lang="ts">
    import Fa from 'svelte-fa'
    import {faHomeUser} from '@fortawesome/free-solid-svg-icons'
    import { base } from '$app/paths';
    import { resolve } from '$app/paths';

    // using a pathname
    const resolved = resolve(`/blog/hello-world`);</script>

<div class="container col-xxl-12 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-md-3">
            </div>
            <div class="col-md-6">

                <div class="alert alert-success" role="alert">
                    <h4 class="alert-heading">Thank you!</h4>
                    <p>Your interest in engaging Clean Code Solutions in your software development project is much appreciated.
                        We will be in touch.</p>
                    <hr>
                    <p class="mb-0">
                        <a href={resolve('/')} class="btn btn-primary"><Fa icon={faHomeUser} /> Back to Home</a>
                    </p>
                </div>

            </div>
            <div class="col-md-3">
            </div>
        </div>
</div>



<style>
</style>