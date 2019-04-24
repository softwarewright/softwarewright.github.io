<template>
  <div class="main-layout">
    <navbar></navbar>
    <transition name="fade">
      <nuxt />
    </transition>
    <closing-footer class="mt-auto"></closing-footer>
  </div>
</template>
<script>
import Navbar from "~/components/shared/Navbar"
import ClosingFooter from "~/components/shared/ClosingFooter"

export default {
  components: {
    Navbar,
    ClosingFooter
  }
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
font-family: Montserrat;
}

h1, h2, h3, h4, h5 {
  font-family: 'Roboto Slab';
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

</style>
