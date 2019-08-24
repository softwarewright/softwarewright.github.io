<template>
  <div class="container">
    <p>
      Have a question? Feel free to contact me at my email
      <a href="mailto:contact@softwarebywright.com">contact@softwarebywright.com</a> or fill out the form below.
    </p>
    <form action="https://formspree.io/contact@softwarebywright.com" method="POST">
      <div class="form-group row">
        <label for="nameField">Name</label>
        <input type="text" name="name" id="nameField" class="form-control" />
      </div>
      <div class="form-group row">
        <label for="emailField">Email</label>
        <input type="email" name="email" id="emailField" class="form-control" />
      </div>
      <div class="form-group row">
        <label for="projectDetails">Message</label>
        <textarea name="projectDetails" cols="30" rows="10" class="form-control"></textarea>
      </div>
      <div class="form-group row">
        <input type="submit" value="SEND" class="btn btn-primary ml-auto" />
      </div>
    </form>
  </div>
</template>
<style scoped>
</style>
