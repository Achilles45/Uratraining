<template>
  <section class="register">
    <div class="register__card">
      <div class="header text-center">
        <h5>Register Here</h5>
        <small
          >You are few clicks away from learning the skill that can change your
          fincances</small
        >
      </div>
      <form action="">
        <div class="form-group">
          <label for="full name">Name *</label>
          <input type="text" class="form-control" v-model="first__name" />
        </div>
        <div class="form-group">
          <label for="Email">Email Address *</label>
          <input type="email" class="form-control" v-model="email" />
        </div>
        <div class="form-group">
          <label for="phone">Phone Number *</label>
          <input
            type="number"
            v-model="phone__number"
            class="form-control"
            min="11"
            max="11"
          />
        </div>
        <div class="form-group">
          <label for="account-type">Account type *</label>
          <select name="select" id="" class="form-control" v-model="type">
            <option value="disabled">Select account type</option>
            <option value="Academy">Academy</option>
            <option value="Signals">Signals</option>
          </select>
        </div>
        <div class="form-group">
          <label for="Password">Password *</label>
          <input type="password" class="form-control" v-model="password" />
        </div>
        <button type="submit" class="sign__btn" name="submit">SIGN UP</button>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      first__name: null,
      email: null,
      phone__number: null,
      type: null
    };
  }
};
</script>
<style lang="scss" scoped>
.register {
  background: #f6f7ff;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .register__card {
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 1px 4px rgba(91, 99, 254, 0.2);
    max-width: 400px;
    padding: 2rem;
    margin: 30px auto;
    .header {
      padding-top: 0.5rem;
      h5 {
        font-weight: bold;
        color: #2b2b2b;
        padding-bottom: 0.2rem;
      }
      small {
        font-weight: bold;
        font-size: 0.7rem;
        opacity: 0.8;
        color: #2b2b2b;
      }
    }
    form {
      padding-top: 1.5rem;
      label {
        font-size: 0.7rem;
        color: #2b2b2b;
        font-weight: bolder;
        opacity: 0.7;
      }
      input,
      select {
        box-shadow: none;
        border-radius: 3px;
        font-size: 0.8rem;
        height: 2.5rem;
        border: 1px solid #ccc;
      }
      .sign__btn {
        background: #1e7b85;
        height: 3.2rem;
        color: #fff;
        text-decoration: none;
        width: 100%;
        border: none;
        border-radius: 3px;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
