<template>
  <div>
    <hero-section/>
    <value-section/>
    <certified-section/>
    <blog-section/>
  </div>
</template>
<script>
import HeroSection from "~/components/home/hero/HeroSection";
import ValueSection from "~/components/home/value/ValueSection";
import CertifiedSection from "~/components/home/certified/CertifiedSection";
import BlogSection from "~/components/home/blog/BlogSection";
export default {
  components: {
    HeroSection,
    ValueSection,
    CertifiedSection,
    BlogSection
  }
};
</script>
