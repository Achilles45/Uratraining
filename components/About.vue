<template>
  <section class="about" id="about">
    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6 text-center">
          <div class="title">
            <h2>Who We Are</h2>
          </div>
          <hr />
        </div>
        <div class="col-md-3"></div>
      </div>
      <div class="row text-center">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <p>
            We at Uratraining beleive that quality training proceeds quality
            result and that is why we take a different approach in our training
            methodology to make sure we provide world class training with time
            proven winning strategies in forex trading. Our academy is very
            result orintented because we believe you should get the maximum
            return on your time, energy and resources you invest to learn how to
            trade the forex market
          </p>
        </div>
        <div class="col-md-1"></div>
      </div>
      <h5 class="text-center">Why you should choose us</h5>
      <div class="about__grid__container">
        <div class="about__card">
          <img src="../assets/images/result.svg" class="icons" alt="" />
          <h5>Market Proven Stragegies</h5>
          <p>
            All our trainings are as a result of battle tested experience in the
            market as against some theoritical approach.
          </p>
        </div>
        <div class="about__card">
          <img src="../assets/images/support.svg" class="icons" alt="" />
          <h5>24/7 Customer support</h5>
          <p>
            Our supporrt system is automated to make sure you have a wonderful
            experince while learning with us.
          </p>
        </div>
        <div class="about__card">
          <img src="../assets/images/train.svg" class="icons" alt="" />
          <h5>Real-time access to training</h5>
          <p>
            We have a cool learning facility for you to learn without
            distraction. You can also get access to didgital training materials
            on demand.
          </p>
          <p></p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.about {
  padding: 6.5rem 0;
  h2 {
    font-weight: bold;
  }
  h5 {
    font-weight: bold;
    padding-top: 1.5rem;
    color: #2b2b2b;
    text-transform: capitalize;
  }
  p {
    color: #2b2b2b;
    padding-top: 1rem;
    line-height: 1.8;
    opacity: 0.9;
    font-size: 0.9rem;
  }
  .about__grid__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 30px;
    padding-top: 3rem;
    .about__card {
      padding: 0.7rem 1.5rem;
      border-radius: 3px;
      box-shadow: 0 1px 4px rgba(91, 99, 254, 0.2);
      .icons {
        max-width: 50px;
        height: auto;
        padding: 1rem 0;
      }
      h5 {
        font-weight: bold;
        font-size: 1rem;
        padding-bottom: 0.7rem;
      }
      p {
        font-size: 0.85rem;
        opacity: 0.9;
      }
    }
  }
}
</style>
