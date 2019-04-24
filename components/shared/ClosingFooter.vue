<template>
  <div>
    <div
      v-if="$route.path !== '/contact'"
      class="closing-cta"
    >
      <div class="container">
        <div class="row">
          <h2 class="col-12">Ready to take your Software Delivery to the next level?</h2>
          <nuxt-link
            to="/contact"
            class="closing-cta-btn mx-auto btn btn-outline-primary"
          >REQUEST FREE CONSULTATION</nuxt-link>
        </div>
      </div>
    </div>
    <footer class="container-fluid">
      <div class="row">
        <div class="social col-lg-2 col-md-4">
          <div class="logo">
            <fa-icon
              class="logo-icon"
              :icon="['fas', 'cogs']"
            />
            <h3>SBW</h3>
          </div>
          <p>Developing Infrastructure that works for you!</p>
          <div class="social-icons">
            <a
              href="https://twitter.com/softwarewright"
              target="_blank"
            >
              <fa-icon
                class="certified-icon"
                :icon="['fab', 'twitter']"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/darrius-wright/"
              target="_blank"
            >
              <fa-icon
                class="certified-icon"
                :icon="['fab', 'linkedin']"
              />
            </a>
            <a
              href="https://github.com/softwarebywright"
              target="_blank"
            >
              <fa-icon
                class="certified-icon"
                :icon="['fab', 'github-square']"
              />
            </a>
          </div>
        </div>
        <div class="offset-lg-6 offset-md-4 contact">
          <h3>Contact</h3>
          <div class="contact-info">
            <a href="mailto:softwarebywright@gmail.com">
              softwarebywright@gmail.com
            </a>
            <a href="tel:+18018105280">
              801-810-5280
            </a>
          </div>
        </div>
        <div class="copyright">© All rights reserved Software By Wright</div>
      </div>
    </footer>
  </div>

</template>
<style lang="scss" scoped>
  @import "~/assets/_variables.scss";

  .closing-cta {
    background: #f8f9fa;
    padding: 2rem;
    margin-top: 4rem;
  }

  .closing-cta-btn {
    border-radius: 0;
    margin-top: 2rem;
    font-size: 1rem;
    padding: 1.5rem 2rem;
  }

  footer {
    padding: 2rem 4rem 1rem;
    background: #424453;
    color: white;
  }

  .copyright {
    width: 100%;
    text-align: center;
  }

  .contact,
  .social {
    padding: 2rem 0;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
  }

  .contact-info a {
    color: white;
  }

  .social a {
    color: white;
    font-size: 2rem;
    margin-left: 0.5rem;
  }

  .social a:hover,
  .contact-info a:hover {
    color: $primary;
  }

  h2 {
    text-align: center;
  }
  .logo {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  .logo-icon {
    font-size: 1.75rem;
  }
  h3 {
    margin-bottom: 0;
    margin-left: 5px;
  }
</style>
