<template>
  <header class="container-fluid">
    <div class="container">
      <nav class="d-flex justify-content-between align-content-center">
        <div class="logo">
          <nuxt-link to="/">
            <img
              src="../assets/images/logo.jpg"
              class="logo-img img-fluid"
              alt="Logo-image"
            />
          </nuxt-link>
        </div>
        <ul class="pt-2">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="#about">About Us</nuxt-link></li>
          <li><nuxt-link to="/#pricing">See Our Pricing</nuxt-link></li>
          <li><nuxt-link to="/#contact">Contact Us</nuxt-link></li>
          <li>
            <nuxt-link to="/register" class="register">Register Here</nuxt-link>
          </li>
        </ul>
        <img
          src="../assets/images/menu.svg"
          @click="alert('WORKING ...')"
          class="menu"
          id="menu"
          alt=""
        />
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  method: {
    toggleNav: function() {
      alert("Working");
    }
  }
};
</script>
<style lang="scss" scoped>
header {
  box-shadow: 3px 0px 5px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000 !important;
  background: #fff;
  nav {
    padding: 1rem 0;
    .logo-img {
      max-width: 40px;
      height: auto;
    }
    ul {
      //   padding-top: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      li a {
        text-decoration: none;
        align-self: center;
        margin: 0rem 0.5rem;
        font-size: 0.8rem;
        font-weight: bold;
        color: #2d2d2d;
        text-transform: uppercase;
        font-weight: bolder !important;
      }
      .register {
        background: #1e7b85;
        color: #fff;
        padding: 0.9rem 1.5rem;
        border-radius: 3px;
        font-weight: normal !important;
      }
    }
    .menu {
      max-width: 20px;
      height: auto;
      display: none;
    }
  }
}

//MEDIA QUERIES
@media only screen and (max-width: 800px) {
  nav {
    ul {
      flex-direction: column !important;
      background: #000;
      position: absolute;
      left: 0;
      top: 100%;
      width: 100%;
      height: 100vh;
      line-height: 4;
      display: none !important;
      li a {
        color: #fff !important;
      }
    }
    .menu {
      display: block !important;
    }
  }
}
</style>
