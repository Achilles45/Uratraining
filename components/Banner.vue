<template>
  <section class="banner container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-6 text">
          <h1>Learn winning strategies in forex trading today</h1>
          <p>
            Learning to trade the biggest financial financial market in the
            world is such a valuable skill. You are sure to walk away with the
            essential tips that are market proven on how to profitably trade the
            forex market
          </p>
          <nuxt-link to="/register" class="hero__btn">Register Here</nuxt-link>
        </div>
        <div class="col-md-6 img__holder">
          <!-- <img src="../assets/images/m" class="banner__img" alt="" /> -->
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.banner {
  background: linear-gradient(rgba(4, 9, 30, 0.9), rgba(4, 9, 30, 0.9)),
    url("../assets/images/office.jpeg");
  background-size: cover;
  background-position: center;
  padding: 9.5rem 0;
  .text {
    h1 {
      font-weight: bold;
      color: #fff;
      text-transform: capitalize;
      text-shadow: 0.03em 0.03em 0.05em rgba(0, 0, 0, 0.5);
      padding-bottom: 1.3rem;
      font-size: 2.6rem;
      line-height: 1.5;
      padding-top: 4rem;
    }
    p {
      padding-bottom: 2.5rem;
      color: #fff;
      line-height: 2;
      opacity: 0.6;
      font-size: 0.9rem;
    }
    .hero__btn {
      background: #1e7b85;
      padding: 1.3rem 4rem;
      border-radius: 3px;
      color: #fff;
      text-decoration: none;
      font-size: 0.9rem;
      //   font-weight: bold;
      &:hover {
        background: #0b81b6;
        transition: all ease-in-out 0.5s;
      }
    }
  }
  .banner__img {
    max-width: 600px;
    height: auto;
  }
}

//MEDIA QUERIES
@media only screen and (max-width: 800px) {
  .banner {
    padding-top: 10rem;
    .text {
      h1 {
        font-size: 1.5rem !important;
      }
    }
    .img__holder {
      padding-top: 3rem;
      .banner__img {
        max-width: 300px !important;
        height: auto;
      }
    }
  }
}
</style>
