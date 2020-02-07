<template>
  <div class="welcome">
    <div class="message text-center">
      <b-alert variant="success" show>
        <div class="content">
          <h3>Hey Thank you for signing up today!</h3>
          <hr />
          <br />
          <p>
            We are glad to have you here today. You just made a key step in
            changing your financial fortunes. We hope you have a wonderful
            experience learning to trade the biggest financial market in the
            world. <br /><br />
            To continue, make payment into the bank either by transfer or
            Deposit and send an evidence of payment to the email address
            provided here <br /><br /><br />
            Bank Name: First Bank Of Nigeria PLC <br /><br />
            Account Number: 101010101010 <br /><br />
            Email Adress: uratrainingfx@gmail.com <br /><br />
          </p>
        </div>
      </b-alert>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.welcome {
  background: #f6f7ff;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    padding: 3rem 2rem;
    h3 {
      // padding-bottom: 2rem;
      text-transform: capitalize;
    }
  }
}
</style>
