<template>
  <page-section>
    <div class="container">
      <h2>Contact Us</h2>
      <p>Schedule a free consultation <a href="https://calendly.com/softwarebywright">here</a> or fill out the form below.</p>
      <form action="https://formspree.io/softwarebywright@gmail.com" method="POST">
        <div class="form-group row">
          <label for="nameField">Name</label>
          <input type="text" name="name" id="nameField" class="form-control">
        </div>
        <div class="form-group row">
          <label for="emailField">Email</label>
          <input type="email" name="email" id="emailField" class="form-control">
        </div>
        <div class="form-group row">
          <label for="projectDetails">Project Details</label>
          <textarea name="projectDetails" cols="30" rows="10" class="form-control"></textarea>
        </div>
        <div class="form-group row">
          <input type="submit" value="SEND" class="btn btn-primary ml-auto">
        </div>
      </form>
    </div>
  </page-section>
</template>
<script>
import PageSection from "~/components/shared/PageSection"
export default {
  components: {
    PageSection
  }
}
</script>
<style scoped>
  h2, p{
   text-align: center;
   margin-bottom: 1.5rem;
  }

  .btn-primary {
    font-size: 1.5rem;
  }

  .container {
    padding-bottom: 4rem;
  }
</style>

