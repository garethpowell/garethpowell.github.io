<script lang="ts">
    import {page} from '$app/state';
    import { base } from '$app/paths';
</script>

<div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10">

            <h1>SYSTEM ERROR - {page.status}</h1>
            <div class="error-details">
                <p>{page.status} {page.error.message}</p>
                <p>A fatal exception 0E has occurred at 0028:C0011E36 in VXD VMM(01) +</p>
                <p>The current application will be terminated.</p>
                <p>* Press any key to return to the home page</p>
                <p>* Press CTRL+ALT+DEL to restart your computer. You will</p>
                <p>&nbsp;&nbsp;lose any unsaved information in all applications.</p>
            </div>
            <a href={base + '/'} class="home-link">Return to Home Page</a>
        </div>
    </div>
</div>


<style>
    body {
        background-color: #0000AA;
        color: #FFFFFF;
        font-family: "Courier New", Courier, monospace;
        font-size: 16px;
        margin: 50px;
        line-height: 1.6;
    }

    .container {
        max-width: 800px;
        margin: 0 auto;
    }

    h1 {
        font-size: 30px;
        margin-bottom: 30px;
    }

    .error-details {
        margin: 30px 0;
    }

    .home-link {
        color: #FFFFFF;
        text-decoration: none;
        border: 2px solid #FFFFFF;
        padding: 10px 20px;
        display: inline-block;
        margin-top: 30px;
    }

    .home-link:hover {
        background-color: #FFFFFF;
        color: #0000AA;
    }
</style>