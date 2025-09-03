<svelte:head>
    <title>Contact Clean Code Solutions</title>
    <meta name="description" content="Contact Clean Code Solutions"/>
</svelte:head>

<script lang="ts">
    import {Button, Form, FormGroup, Input, Label} from '@sveltestrap/sveltestrap';
    let validated = false;
</script>

<div class="container col-xxl-12 px-4 py-5">


    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-md-6">
            <p>
                For contract availability, reach out directly.
            </p>
            <Form action="https://forms.un-static.com/forms/3df9195493c0adec60bca6916728620901752777" method="post"
                  {validated} >
                <FormGroup>
                    <Label for="inputEmail">Email</Label>
                    <Input type="email" name="email" id="inputEmail" placeholder="joe.bloggs@example.com" required />
                </FormGroup>
                <FormGroup>
                    <Label for="inputName">Name</Label>
                    <Input type="text" name="name" id="inputName" placeholder="" required/>
                </FormGroup>
                <FormGroup>
                    <Label for="inputPhone">Phone</Label>
                    <Input type="text" name="phone" id="inputPhone" placeholder=""/>
                </FormGroup>
                <FormGroup>
                    <Label for="inputMessage">Message</Label>
                    <Input type="textarea" name="message" id="inputMessage" rows="10" placeholder="" required/>
                </FormGroup>
                <FormGroup>
                    <Button class="btn btn-primary" type="submit" on:click={() => (validated = true)}>Send</Button>
                </FormGroup>
            </Form>
        </div>
        <div class="col-md-6">
            <img src="contact-us.jpg" class="img-fluid rounded-3" alt="Contact Us"/>
        </div>
    </div>
</div>


<style>
</style>