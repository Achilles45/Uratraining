<template>
  <section class="banner container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-6 text">
          <h1>Learn winning strategies in forex trading today</h1>
          <p>
            Learning to trade the biggest financial financial market in the
            world is the best. You are sure to walk away with the essential tips
            that are market proven on how to profitably trade the forex market
          </p>
          <nuxt-link to="/register" class="hero__btn">Register Here</nuxt-link>
        </div>
        <div class="col-md-6 img__holder">
          <img src="../assets/images/img1.jpg" class="banner__img" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.banner {
  padding-top: 13rem;
  .text {
    h1 {
      font-weight: bold;
      color: #2b2b2b;
      text-transform: capitalize;
      padding-bottom: 1.3rem;
      font-size: 2.6rem;
      line-height: 1.5;
    }
    p {
      padding-bottom: 1.5rem;
      color: #404040;
      line-height: 1.8;
      opacity: 0.8;
    }
    .hero__btn {
      background: #1e7b85;
      padding: 1.3rem 4rem;
      border-radius: 3px;
      color: #fff;
      text-decoration: none;
      font-size: 0.9rem;
      //   font-weight: bold;
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
