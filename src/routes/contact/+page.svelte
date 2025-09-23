<svelte:head>
    <title>Contact</title>
    <meta name="description" content="Contact Clean Code Solutions"/>
</svelte:head>

<script lang="ts">
    import SectionBackground from "$lib/components/SectionBackground.svelte";
</script>

<SectionBackground
        variant="contact"
        classes="text-white py-5"
        overlay="rgba(0, 0, 0, 0.25)"
>
    <div class="row align-items-center g-4 g-lg-5">
        <div class="col-md-1 col-lg-1"></div>
        <div class="col-sm-12 col-md-10 col-lg-10">
            <h1 class="display-6 fw-bold lh-sm mb-3">Get in touch</h1>
            <p class="lead mb-4">
                For contract availability or enquiries, please use the form below.
            </p>

            <form action="https://forms.un-static.com/forms/3df9195493c0adec60bca6916728620901752777" method="post">
                <div class="mb-3">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" name="email" id="inputEmail"
                           placeholder="joe.bloggs@example.com" required/>
                </div>
                <div class="mb-3">
                    <label for="inputName" class="form-label">Name</label>
                    <input type="text" class="form-control" name="name" id="inputName" required/>
                </div>
                <div class="mb-3">
                    <label for="inputPhone" class="form-label">Phone (optional)</label>
                    <input type="tel" class="form-control" name="phone" id="inputPhone"/>
                </div>
                <div class="mb-3">
                    <label for="inputMessage" class="form-label">Message</label>
                    <textarea class="form-control" name="message" id="inputMessage" rows="8" required></textarea>
                </div>

                <!-- Honeypot field for spam bots -->
                <input type="text" name="address" class="d-none" tabindex="-1" autocomplete="off" aria-hidden="true"/>

                <div class="d-grid d-sm-inline-flex gap-2">
                    <button class="btn btn-glass" type="submit">Send</button>
                </div>
            </form>
        </div>
        <div class="col-md-1 col-lg-1"></div>
    </div>
</SectionBackground>
