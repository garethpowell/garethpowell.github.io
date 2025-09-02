<svelte:head>
    <title>About</title>
    <meta name="description" content="About Clean Code Solutions & Gareth Powell"/>
</svelte:head>

<script lang="ts">

</script>

<div class="container col-xxl-12 px-4 py-5">

    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-md-6">
            <div class="mb-3">
                <label for="contactUsName" class="form-label">Name</label>
                <input type="email" class="form-control" id="contactUsName" placeholder="Joe Bloggs">
            </div>
            <div class="mb-3">
                <label for="contactUsEmail" class="form-label">Email address</label>
                <input type="email" class="form-control" id="contactUsEmail" placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="contactUsMessage" class="form-label">Message</label>
                <textarea class="form-control" id="contactUsMessage" rows="10"></textarea>
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-primary">Send</button>
                <a href="mailto:gareth@cleancode.uk" class="btn btn-secondary">Email Directly</a>
            </div>
        </div>
        <div class="col-md-6">
            <img src="contact-us.jpg" class="img-fluid rounded-3" alt="Contact Us"/>
        </div>
    </div>

</div>



<style>
</style>