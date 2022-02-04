<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
// import Register from "./views/Register/Register.vue";
// import Register from "./views/Register/Register.vue"
export default {
  name: "App",

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
	background: linear-gradient(-45deg, #1a660b, #97e73c, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 60s ease infinite;
	height: 100vh;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
