<!--https://sveltestrap.js.org/-->
<script lang="ts">
    import Fa from 'svelte-fa'
    import {
        faGithub, faXTwitter, faLinkedin, faInstagram
    } from '@fortawesome/free-brands-svg-icons';
    import {
        faAt
    }
    from '@fortawesome/free-solid-svg-icons'
</script>


<footer class="bg-dark text-center text-white fixed-bottom">
    <!-- Grid container -->
    <div class="container p-4 pb-4">

        <section>

            <div class="container text-center">
                <div class="row align-items-start align-items-center">
                    <div class="col">
                        <!-- Copyright -->
                        <!--<section>-->
                        © 2025 Copyright: <a class="text-white" href="https://cleancode.uk/">cleancode.uk</a>
                        <!--</section>-->
                        <!-- Copyright -->
                    </div>
                    <div class="col">
                        <!-- Section: Social media -->
                        <!--<section>-->
                        <!-- Twitter -->
                        <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1" href="#!" role="button" aria-label="Twitter"
                        ><Fa icon={faXTwitter}/></a>

                        <!-- Instagram -->
                        <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1" href="#!" role="button" aria-label="Instagram">
                            <Fa icon={faInstagram}/>
                        </a>

                        <!-- Linkedin -->
                        <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1" href="#!" role="button" aria-label="LinkedIn">
                            <Fa icon={faLinkedin}/>
                        </a>

                        <!-- Github -->
                        <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1" href="#!" role="button" aria-label="GitHub">
                            <Fa icon={faGithub}/>
                        </a>

                        <!-- Email -->
                        <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1" href="#!" role="button" aria-label="GitHub">
                            <Fa icon={faAt}/>
                        </a>
                        <!--</section>-->
                        <!-- Section: Social media -->
                    </div>
                </div>
            </div>

        </section>


    </div>
    <!-- Grid container -->

</footer>
