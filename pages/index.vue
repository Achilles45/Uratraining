<template>
  <div class="conten">
    <Navbar />
    <Banner />
    <About />
    <Pricing />
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Banner from "~/components/Banner.vue";
import About from "~/components/About.vue";
import Pricing from "~/components/Pricing.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Navbar,
    Banner,
    About,
    Pricing,
    Footer
  }
};
</script>
