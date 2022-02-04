<template>
  <div class="container mt-5 mb-5">
    <div class="col-md-12 d-flex justify-content-center">
      <div class="clsCardOuter card p-5">
        <div class="card-header text-white mb-4"><h2>Sample Registraion Form!</h2></div>
        <form id="register-form" @submit.prevent="onSubmit">
          <div class="form-floating mb-3">
            <input
              type="name"
              class="form-control transparent-input"
              id="name"
              v-model="model.name"
              placeholder="First Name"
            />
            <label for="name">Full Name</label>
            <div v-if="errors.name" class="clsInvalidValue">
              {{ errors.name }}
            </div>
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control transparent-input"
              id="email"
              v-model="model.email"
              placeholder="name@fetchrewards.com"
            />
            <label for="email">Email address</label>
            <div v-if="errors.email" class="clsInvalidValue">
              {{ errors.email }}
            </div>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control transparent-input"
              id="password"
              v-model="model.password"
              placeholder="Password"
            />
            <label for="password">Password</label>
            <div v-if="errors.password" class="clsInvalidValue">
              {{ errors.password }}
            </div>
          </div>
          <div class="form-floating mb-3">
            <select
              class="form-select transparent-input"
              id="occupation "
              aria-label="Occupation"
              v-model="model.occupation"
            >
              <option selected disabled>Select</option>
              <option
                v-for="(occ, index) in occupations"
                :key="index"
                :value="occ"
              >
                {{ occ }}
              </option>
            </select>
            <label for="occupation">Occupation</label>
            <div v-if="errors.occupation" class="clsInvalidValue">
              {{ errors.occupation }}
            </div>
          </div>
          <div class="form-floating mb-3">
            <select
              class="form-select transparent-input"
              id="state"
              aria-label="State"
              v-model="model.state"
            >
              <option selected disabled>Select</option>
              <option
                v-for="stt in states"
                :key="stt.abbreviation"
                :value="stt"
              >
                {{ stt.name }}
              </option>
            </select>
            <label for="occupation">State</label>
            <div v-if="errors.state" class="clsInvalidValue">
              {{ errors.state }}
            </div>
          </div>

          <button type="submit" class="float-end btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { API } from "../../services/api.service";
export default {
  name: "register",
  data() {
    return {
      errors: {},
      model: {
        name: "",
        email: "",
        password: "",
        state: "",
        occupation: "",
      },
      states: [],
      occupations: [],
    };
  },
  created() {
    API.GET_FORM()
      .then((res) => {
        console.log(res);
        if (res.data) {
          if (res.data.occupations) {
            this.occupations = res.data.occupations;
          }
          if (res.data.states) {
            this.states = res.data.states;
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  methods: {
    async onSubmit() {
      this.errors = {};
      if (await this.validator()) {
        console.log(this.model);
        API.POST_FORM(this.model)
          .then((res) => {
            console.log(res); // eslint-disable-line no-debugger
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    validator() {
      if (!this.model.name) {
        this.errors.name = "Please Enter your Full Name.";
      }
      if (!this.model.email) {
        this.errors.email = "Please Enter your Email.";
      }
      if (!this.model.password) {
        this.errors.password = "Please Enter your Password.";
      }
      if (!this.model.occupation) {
        this.errors.occupation = "Please select your Occupation.";
      }
      if (!this.model.state) {
        this.errors.state = "Please select your State.";
      }
      if (Object.keys(this.errors).length === 0) return true;
      else return false;
    },
  },
};
</script>
<style>
.clsInvalidValue {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
  text-align: end;
  background: #dc3545;
  display: inline-block;
  color: wheat;
  padding: 0.2rem 0.5rem;
  border-radius: 1rem;
}
.clsCardOuter {
  min-width: 50% !important;
  background-color: #0000008c !important;
  box-shadow: 6px 6px 25px;
}
input.transparent-input {
  background-color: #c9ffefa1 !important;
  border: none !important;
}
select.transparent-input {
  background-color: #c9ffefa1 !important;
  border: none !important;
}
</style>
