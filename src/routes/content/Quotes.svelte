<script lang="ts">
    import {resolve} from '$app/paths';
    import SectionBackground from "$lib/components/SectionBackground.svelte";
</script>

<br/>

<SectionBackground
        variant="hex"
        classes="text-white py-5"
>
    <h2 class="py-4">Testimonials</h2>
    <div class="row g-4 g-lg-5">
        <div class="col-11 col-lg-11">
            <div class="card h-100">
                <div class="card-body">
                    <div class="d-flex align-items-start">
                        <img src={resolve('/mattk@1.0x.webp')} alt="Portrait of Matt Kitching" height="150"
                             class="rounded me-3 flex-shrink-0" loading="lazy" decoding="async"/>
                        <div>
                            <p class="mb-2">
                                Gaz has been part of Mosaic Island’s story for the last 15 years.
                                He first contributed as an MI associate (contractor) on the original implementation
                                of our CRM system for a key client back in 2010.
                                Then officially joined as an employee in January 2013 when
                                the engineering team relocated from London to our new Bristol office.
                            </p>
                            <p class="mb-2">
                                During this time Gaz has played a leading role within our systems engineering and has
                                made a huge impact on our systems quality, software delivery, our teams, and the service
                                delivered to our clients. Rather than try to list all of his achievements here.
                                There are far too many! I want to take this opportunity to thank Gaz for his
                                outstanding contribution and to say personally that I will greatly miss working with
                                him each day as both a colleague and a friend.
                            </p>
                            <div class="small text-body-secondary">— Matt Kitching, Head of Application Engineering
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br/>

    <div class="row g-4 g-lg-5">
        <div class="col-1"></div>
        <div class="col-11">
            <div class="card h-100 quotes-cards-listing">
                <div class="card-body">
                    <div class="d-flex align-items-start">
                        <div>
                            <p class="mb-2">I had the privilege of working with Gaz for over five years, and honestly,
                                it was a huge part of my growth as a developer. He’ll probably say his mentoring was
                                minimal, but his guidance and high standards have had a lasting impact on how I
                                approach software development. Gaz is incredibly proactive and always there to help
                                whenever I hit a roadblock.</p>
                            <p class="mb-2">What sets him apart is his ability to think a step ahead
                                — his coding standards, architectural insight, and focus on clean, maintainable code
                                genuinely raise the bar for everyone around him. He’s not just a brilliant technical
                                leader, but someone who truly invests in helping others grow and succeed.
                            </p>
                            <div class="small text-body-secondary">— Aditya Vulichi, Software Engineer</div>
                        </div>
                        <img src={resolve('/Aditya@1.0x.webp')} alt="Portrait of Aditye Vulichi" height="150"
                             class="rounded me-3 flex-shrink-0" loading="lazy" decoding="async"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br/>

    <div class="row g-4 g-lg-5">
        <div class="col-11">
            <div class="card h-100 quotes-cards-listing">
                <div class="card-body">
                    <div class="d-flex align-items-start">
                        <img src={resolve('/Group-349.webp')} alt="Portrait of Natasha Ogden" height="150"
                             class="rounded me-3 flex-shrink-0" loading="lazy" decoding="async"/>
                        <div>
                            <p class="mb-2">Gareth has been such a huge part of Mosaic Island’s journey – 15 years of
                                dedication and hard work resulting in a huge impact on our delivery, in particular,
                                one of our key Clients Which? which he's serviced since inception.</p>
                            <p class="mb-2">Working with Gareth was a joy – not just because he did great work for some
                                great Clients, but because of his fun and friendly nature – lots of laughs shared and I
                                will miss working with him massively.
                                You won't regret having Gareth as part of any
                                software development/end-to-end delivery project!</p>
                            <div class="small text-body-secondary">— Natasha Ogden, Commercial & People Director</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br/>

    <div class="row g-4 g-lg-5">
        <div class="col-1 col-lg-1"></div>
        <div class="col-11 col-lg-11">
            <div class="card h-100 quotes-cards-listing">
                <div class="card-body">
                    <div class="d-flex align-items-start">
                        <div>
                            <p class="mb-2">It's been a long journey in which you have played a fabulous role. So many
                                nights out in London to remember.</p>
                            <div class="small text-body-secondary">— Matt Lock, Business Development Director</div>
                        </div>
                        <img src={resolve('/Group-347.webp')} alt="Portrait of Matt Lock" height="150"
                             class="rounded me-3 flex-shrink-0" loading="lazy" decoding="async"/>
                    </div>
                </div>
            </div>
        </div>
    </div>


</SectionBackground>

