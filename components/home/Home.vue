<template>
  <div>
    <hero-section/>
    <value-section/>
    <certified-section/>
    <blog-section/>
  </div>
</template>
<script>
/**
 * HeroSection
 * ValueSection
 * CertifiedSection
 * BlogSection
 */
import HeroSection from "~/components/Home/hero/HeroSection"
import ValueSection from "~/components/Home/value/ValueSection"
import CertifiedSection from "~/components/Home/certified/CertifiedSection"
import BlogSection from "~/components/Home/blog/BlogSection"
export default {
  components: {
    HeroSection,
    ValueSection,
    CertifiedSection,
    BlogSection
  }
}
</script>
