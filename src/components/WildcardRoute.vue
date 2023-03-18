<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div id="notfound">
    <div class="notfound-404">
      <h1 class="heading">OOps!</h1>
    </div>
      <h3>404 - PAGE NOT FOUND</h3>
      <p>
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable.
      </p>
      <button @click="goToHome">Go To Home</button>
  </div>
</template>
<script>
export default {
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
}

#notfound {
  height: 100vh;
}


.notfound {
  max-width: 410px;
  width: 100%;
  text-align: center;
}

.notfound .notfound-404 {
  height: 280px;
  position: relative;
  z-index: -1;
}

.heading {
  font-family: "Montserrat", sans-serif;
  font-size: 130px;
  margin: 0px;
  font-weight: 900;
  background: url("../assets/bg.jpg") no-repeat;
  -webkit-background-clip: text;
  color: transparent;
  background-size: cover;
  background-position: center;
}

.notfound h2 {
  font-family: "Montserrat", sans-serif;
  color: #000;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
}

.notfound p {
  font-family: "Montserrat", sans-serif;
  color: #000;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 20px;
  margin-top: 0px;
}

.notfound a {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  background: #0046d5;
  display: inline-block;
  padding: 15px 30px;
  border-radius: 40px;
  color: #fff;
  font-weight: 700;
  -webkit-box-shadow: 0px 4px 15px -5px #0046d5;
  box-shadow: 0px 4px 15px -5px #0046d5;
}

@media only screen and (max-width: 767px) {
  .notfound .notfound-404 {
    height: 142px;
  }
  .notfound .notfound-404 h1 {
    font-size: 112px;
  }
}
</style>
