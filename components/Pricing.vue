<template>
  <section class="pricing" id="pricing">
    <div class="flow d-none d-md-block">
      <img src="../assets/images/flow1.svg" class="flow__img" alt="" />
    </div>
    <div class="flow2 d-none d-md-block">
      <img src="../assets/images/flow1.svg" class="flow__img" alt="" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center heading">
          <h4>SEE OUR PRICING HERE</h4>
          <p>You are one click away from acquiring a higly profitable skill</p>
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6">
              <div class="card__wrapper">
                <div class="header">
                  <h5>REGISTRATION</h5>
                  <h6>&#36; 115.00</h6>
                </div>
                <div class="content">
                  <small
                    ><strong
                      >You will learn the following among others</strong
                    ></small
                  ><br /><br />
                  <p>Forex Trading Basics</p>
                  <p>Advanced Concepts in Forex</p>
                  <p>Fundamental Analysis</p>
                  <p>Market proven winning strategies</p>
                  <p>Real time support in the course of the training</p>
                  <br />
                  <div class="button text-center">
                    <nuxt-link to="/register" class="price__btn"
                      >Register Here</nuxt-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card__wrapper">
                <div class="header">
                  <h5>GET SIGNALS</h5>
                  <h6>&#36; 100.00 Monthly</h6>
                </div>
                <div class="content">
                  <small
                    ><strong
                      >You will get access to the following among others</strong
                    ></small
                  ><br /><br />
                  <p>Daily Trading Signals</p>
                  <p>Read the news and trade</p>
                  <p>Fundamental Analysis</p>
                  <p>Market proven winning strategies</p>
                  <p>Blogs to further learn from</p>
                  <br />
                  <div class="button text-center">
                    <nuxt-link to="/register" class="price__btn"
                      >Subscribe Here</nuxt-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.pricing {
  background: #f6f7ff;
  padding: 6.5rem 0;
  position: relative;
  .flow {
    position: absolute;
    right: 50px;
    top: 50px;
    .flow__img {
      max-width: 80px;
      height: auto;
    }
  }
  .flow2 {
    position: absolute;
    left: 50px;
    bottom: 50px;
    bottom: 50px;
    .flow__img {
      max-width: 80px;
      height: auto;
    }
  }
  .heading {
    h4 {
      font-weight: bold;
      color: #2b2b2b;
    }
    p {
      font-size: 0.9rem;
      opacity: 0.9;
    }
  }
  .card__wrapper {
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 4px rgba(91, 99, 254, 0.2);
    margin-bottom: 1.5rem;
    .header {
      background: #1e7b85;
      padding: 1.5rem 2rem;
      text-align: center;
      color: #fff;
      border-radius: 5px;
      h5 {
        font-size: 1rem;
        letter-spacing: 0.5px;
      }
      h6 {
        color: #fff;
        font-weight: normal;
        font-size: 1.4rem;
        padding-top: 1rem;
        letter-spacing: 1px;
      }
    }
    .content {
      padding: 2rem 2rem;
      p {
        font-size: 0.8rem;
        border-bottom: 1px solid #ebebeb;
      }
      .price__btn {
        background: #1e7b85;
        padding: 0.8rem 3.5rem;
        border-radius: 4px;
        color: #fff;
        font-size: 0.8rem;
        text-decoration: none;
      }
    }
  }
}
</style>
