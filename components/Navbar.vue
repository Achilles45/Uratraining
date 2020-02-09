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
        <ul class="pt-2" id="list">
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li><nuxt-link to="#about" id="link">About Us</nuxt-link></li>
          <li><nuxt-link to="/#pricing">See Our Pricing</nuxt-link></li>
          <li><nuxt-link to="/#contact">Contact Us</nuxt-link></li>
          <li>
            <nuxt-link to="/register" class="register">Register Here</nuxt-link>
          </li>
        </ul>
        <img
          src="../assets/images/menu.svg"
          class="menu"
          @click="toggleNav()"
          id="menu"
          alt=""
        />
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    toggleNav() {
      const navToggler = document.querySelector("#menu");
      const nav = document.querySelector("#list");
      navToggler.addEventListener("click", () => {
        nav.classList.toggle("toggle__nav");
      });
    }
    // removeLink() {
    //   const link = document.querySelector("#link");
    //   const nav = document.querySelector("#list");
    //   link.addEventListener("click", () => {
    //     nav.classList.remove();
    //   });
    // }
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
        &:hover {
          color: #1e7b85;
          transition: all ease-in-out 0.5s;
        }
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
      cursor: pointer;
    }
  }
}
.toggle__nav {
  display: block !important;
}
.hide__nav {
  display: none !important;
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
      width: 75%;
      height: 100vh;
      line-height: 4;
      display: none !important;
      transition: all 0.5s ease-in;
      padding: 6rem 0 !important;
      li a {
        color: #fff !important;
        margin: 4rem 3rem !important;
        font-size: 0.9rem !important;
      }
    }
    .menu {
      display: block !important;
    }
  }
}
</style>
