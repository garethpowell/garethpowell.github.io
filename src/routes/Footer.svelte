<!--https://sveltestrap.js.org/-->
<script lang="ts">
    import Fa from 'svelte-fa'
    import {faBluesky, faGithub, faInstagram, faLinkedin, faXTwitter} from '@fortawesome/free-brands-svg-icons';
    import {faAt} from '@fortawesome/free-solid-svg-icons'
</script>


<footer class="bg-dark text-center text-white fixed-bottom">
    <!-- Grid container -->
    <div class="container p-4 pb-4">

        <section>

            <div class="container text-center">
                <div class="row align-items-start align-items-center">
                    <div class="col">
                        <!-- Copyright -->
                        © 2025 Copyright: <a class="text-white" href="https://cleancode.uk/">cleancode.uk</a>
                        <!-- Copyright -->
                    </div>
                    <div class="col">
                        <!-- Section: Social media -->
                        <!-- Twitter -->
                        <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1"
                           href="https://x.com/gazpowell" role="button" aria-label="Twitter" target="_blank">
                            <Fa icon={faXTwitter}/>
                        </a>

                        <!-- Bluesky -->
                        <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1"
                           href="https://bsky.app/profile/gazpowell.bsky.social" role="button" aria-label="BlueSky"
                           target="_blank">
                            <Fa icon={faBluesky}/>
                        </a>

                        <!-- Instagram -->
                        <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1"
                           href="https://www.instagram.com/aventyret_borjar" role="button" aria-label="Instagram"
                           target="_blank">
                            <Fa icon={faInstagram}/>
                        </a>

                        <!-- Linkedin -->
                        <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1"
                           href="https://www.linkedin.com/in/garethpowell/" role="button" aria-label="LinkedIn"
                           target="_blank">
                            <Fa icon={faLinkedin}/>
                        </a>

                        <!-- Github -->
                        <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1"
                           href="https://github.com/garethpowell" role="button" aria-label="GitHub" target="_blank">
                            <Fa icon={faGithub}/>
                        </a>

                        <!-- Email -->
                        <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1"
                           href="mailto:gareth@cleancode.uk" role="button" aria-label="GitHub" target="_blank">
                            <Fa icon={faAt}/>
                        </a>
                        <!-- Section: Social media -->
                    </div>
                </div>
            </div>

        </section>


    </div>
    <!-- Grid container -->

</footer>
