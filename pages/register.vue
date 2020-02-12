<template>
  <section class="register">
    <div class="register__card">
      <div class="header text-center">
        <!-- <h5>Register Here</h5> -->
        <img
          src="../assets/images/logo.jpg"
          class="logo img-fluid"
          alt=""
        /><br /><br />
        <small
          >You are few clicks away from learning the skill that can change your
          fincances</small
        >
      </div>
      <form action="" @submit.prevent="submit()">
        <div v-if="err" class="error">
          <b-alert show variant="danger">{{ err }}</b-alert>
        </div>
        <div v-if="success" class="success">
          <b-alert show variant="success">{{ success }}</b-alert>
        </div>
        <div class="form-group">
          <label for="full name">Name *</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your full name"
            v-model="name"
            id="input"
          />
        </div>
        <div class="form-group">
          <label for="Email">Email Address *</label>
          <input type="email" class="form-control" placeholder="Enter a valid email address" v-model="email" />
        </div>
        <div class="form-group">
          <label for="phone">Phone Number *</label>
          <input
            type="tel"
            v-model="phone"
            placeholder="Enter your phone number"
            class="form-control"
            id="input"
            minlength="11"
            maxlength="11"
          />
        </div>
        <div class="form-group">
          <label for="account-type">Account type *</label>
          <select name="select" id="input" class="form-control" v-model="type">
            <option value="">Choose account type</option>
            <option value="Academy">Academy</option>
            <option value="Signals">Signals</option>
          </select>
        </div>
        <!-- <div class="form-group">
          <label for="Password">Password *</label>
          <input type="password" class="form-control" v-model="password" />
        </div> -->
        <button type="submit" class="sign__btn" name="submit">
          SIGN UP
        </button>
      </form>
    </div>
  </section>
</template>
<script>
import db from "~/firebase/init";
export default {
  data() {
    return {
      name: null,
      phone: null,
      email:null,
      type: null,
      err: null,
      success: null
    };
  },
  methods: {
    submit() {
      const formInputs = document.getElementById("input");
      if (!this.name || !this.phone || !this.type || !this.email) {
        this.showError();
        this.clearAlert();
      } else {
        //Create the new user who filled in the form
        db.collection("users")
          .add({
            First_Name: this.name,
            Phone_Number: this.phone,
            Account_Type: this.type,
            Email: this.email
          })
          .then(() => {
            this.success = "Wait while your registration is processing ...";
            setTimeout(() => {
              this.$router.push({ path: "welcome" });
            }, 500);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    clearAlert() {
      setTimeout(() => {
        document.querySelector(".error").remove();
      }, 4000);
    },
    showError() {
      setTimeout(() => {
        this.err = "Registration failed. All fields are important";
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.register {
  background: #081d3c;
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
      .logo {
        max-width: 70px;
        height: auto;
      }
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
    .error,
    .success {
      font-size: 0.8rem;
      color: #3b3b3b;
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
        &:focus {
          border: 1px solid #1e7b85;
        }
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
