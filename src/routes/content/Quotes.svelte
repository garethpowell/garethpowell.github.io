<script lang="ts">
    import {resolve} from '$app/paths';
    import SectionBackground from "$lib/components/SectionBackground.svelte";
</script>

<br/>

<SectionBackground
        variant="hex"
        classes="text-white py-5"
>
    <h2 class="py-4">Quotes</h2>
    <div class="row g-4 g-lg-5">
        <div class="col-10">
            <div class="card h-100">
                <div class="card-body">
                    <div class="d-flex align-items-start">
                        <div>
                            <p class="mb-2">
                                Gaz has been part of Mosaic Island’s story from the very beginning of the Columbus
                                journey. He first
                                contributed as an MI associate on the original implementation back in 2010, before
                                officially joining
                                as an employee in January 2013 when the team relocated from London to Bristol and we
                                opened the Rombourne
                                office in Aztec West. That adds up to an incredible 15 years of service to Mosaic
                                Island.
                            </p>
                            <p class="mb-2">
                                Over those years, Gaz has played a central role and has made a huge impact on our
                                delivery, our teams,
                                and our clients. Rather than try to list all of his achievements here (there are far too
                                many!), I want
                                to take this opportunity to thank Gaz for his outstanding contribution, and to say
                                personally that I will
                                greatly miss working with him each day as both a colleague and a friend.
                            </p>
                            <div class="small text-body-secondary">— Matthew Kitching, Head of Application Engineering
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br/>

    <div class="row g-4 g-lg-5">
        <div class="col-1 col-lg-4"></div>
        <div class="col-11 col-lg-8">
            <div class="card h-100">
                <div class="card-body">
                    <div class="d-flex align-items-start">
                        <img src={resolve('/Group-347.webp')} alt="Portrait of Matt Lock" width="100" height="100"
                             class="rounded me-3 flex-shrink-0" loading="lazy" decoding="async"/>
                        <div>
                            <p class="mb-2">It's been a long journey in which you have played a fabulous role. So many
                                nights out in London to remember.</p>
                            <div class="small text-body-secondary">— Matt Lock, Business Development Director</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br/>

    <div class="row g-4 g-lg-5">
        <div class="col-12 col-lg-12">
            <div class="card h-100">
                <div class="card-body">
                    <div class="d-flex align-items-start">
                        <img src={resolve('/Group-349.webp')} alt="Portrait of Natasha Ogden" width="100" height="100"
                             class="rounded me-3 flex-shrink-0" loading="lazy" decoding="async"/>
                        <div>
                            <p class="mb-2">Gaz you have been such a huge part of Mosaic Island – thank you for your
                                ongoing dedication to us and for all your hard work on the Which? account!</p>
                            <p class="mb-2">You will be greatly missed – I have such great memories of our days at the
                                Aztec office and our pub/cards against humanity nights — fun times!</p>
                            <div class="small text-body-secondary">— Natasha Ogden, Commercial & People Director</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</SectionBackground>
