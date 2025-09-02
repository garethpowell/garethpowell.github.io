<script lang="ts">
    import Fa from 'svelte-fa'
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        CardSubtitle,
        CardText,
        CardTitle,
        Col,
        Container,
        Row,
    } from '@sveltestrap/sveltestrap';
    import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
</script>


<Container>
    <Row>
        <Col xs="1"/>
        <Col>
            <Card theme="light">
                <CardHeader>
                    <CardTitle>
                        <Fa icon={faQuoteLeft}/>
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    <CardText>
                        Gaz has been part of Mosaic Island’s story from the very beginning of the Columbus journey.
                            He first contributed as an MI associate on the original implementation back in 2010, before
                            officially joining as an employee in January 2013 when the team relocated from London to
                            Bristol and we opened the Rombourne office in Aztec West. That adds up to an incredible 15
                            years of service to Mosaic Island.<br/><br/>

                        Over those years, Gaz has played a central role and has made a huge impact on our delivery,
                            our teams, and our clients. Rather than try to list all of his achievements here (there are
                            far too many!), I want to take this opportunity to thank Gaz for his outstanding
                            contribution, and to say personally that I will greatly miss working with him each day as
                            both a colleague and
                            a friend.
                    </CardText>
                </CardBody>
                <CardFooter>Matthew Kitching :: Head of Application Engineering</CardFooter>
            </Card>
        </Col>
    </Row>
    <Row>
        <Col>&nbsp;</Col>
    </Row>
    <Row>
        <Col>&nbsp;</Col>
    </Row>
    <Row>
        <Col xs="8">
            <Card theme="dark">
                <CardHeader>
                    <CardTitle>
                        <Fa icon={faQuoteLeft}/>
                    </CardTitle>
                </CardHeader>
                <CardBody >
                    <CardText >
                        <img src="Group-347.webp" alt="Matt Lock" height="100" class="rounded float-start px-4"/>
                            It's been a long journey in which you have played a fabulous role. So many nights out in
                            London to remember.
                    </CardText>
                </CardBody>
                <CardFooter>Matt Lock :: Business Development Director</CardFooter>
            </Card>
        </Col>
        <Col xs="4" sm="4"/>
    </Row>
    <Row>
        <Col>&nbsp;</Col>
    </Row>
    <Row>
        <Col>&nbsp;</Col>
    </Row>
    <Row>
        <Col xs="4" sm="4"/>
        <Col xs="8">
            <Card theme="light">
                <CardHeader>
                    <CardTitle>
                        <Fa icon={faQuoteLeft}/>
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    <CardText>
                        <img src="Group-349.webp" alt="Natasha Ogden" height="100" class="rounded float-start px-4"/>Gaz you have been such a huge part of Mosaic Island – thank you for your ongoing dedication
                            to us and for all your hard work on the Which? account!<br/><br/>
                        You will be greatly missed – I have such great memories of our days at the Aztec office and
                            our pub/cards against humanity nights 😊 – fun times!

                    </CardText>
                </CardBody>
                <CardFooter>Natasha Ogden :: Commercial & People Director</CardFooter>
            </Card>
        </Col>
    </Row>
    <Row>
        <Col>&nbsp;</Col>
    </Row>
    <Row>
        <Col>&nbsp;</Col>
    </Row>
    <Row>
        <Col>&nbsp;</Col>
    </Row>
    <Row>
        <Col>&nbsp;</Col>
    </Row>
    <Row>
        <Col>&nbsp;</Col>
    </Row>
    <Row>
        <Col>&nbsp;</Col>
    </Row>
</Container>

<style>

</style>
