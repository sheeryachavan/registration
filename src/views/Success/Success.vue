<template>
  <div class="container mt-5 mb-5">
    <div class="col-md-12 d-flex justify-content-center">
      <div class="clsCardOuter card p-5">
        <div class="card-header text-white mb-4">
          <h2>Your Form has been submitted Successfully!</h2>
        </div>
        <router-link class="btn btn-success" to="/register"
          >File New registration</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flag: {
      type: Boolean,
    },
  },
  mounted(){
    debugger; // eslint-disable-line no-debugger
    if(!this.flag){
        this.$router.push({ name: "Register"});
    }
  }
};
</script>

<style>
</style>