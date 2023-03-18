<template>
  <div class="first">
    <h1 class="second">{{ eachRepo.name }}</h1>
    <p><strong>Description: </strong>{{ eachRepo?.description }}</p>
    <p><strong>Repo full-name: </strong>{{ eachRepo?.full_name }}</p>
    <p class="pr"><strong>Private repo: </strong>{{ eachRepo?.private }}</p>
    <button @click="backToHome" class="home-button">Go To Home</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      number: 1,
      eachRepo: {},
      username: "EstherChristopher",
    };
  },

  // Do for universal/everyone with input username field
  async created() {
    console.log(this.$route);
    const response =
      await axios.get(`https://api.github.com/repos/${this.username}/${this.$route.params.reponame}
    `);
    this.eachRepo = response.data;
    console.log(this.eachRepo);
  },
  methods: {
    backToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.first {
  height: 50%;
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
  font-family: Arial, sans-serif;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

/* Style the heading */
.second {
  font-size: 80px;
  color: #333;
  margin-bottom: 20px;
}

/* Style the paragraphs */
p {
  font-size: 50px;
  color: #555;
  line-height: 1.5;
  margin-bottom: 10px;
}

p:last-child {
  margin-bottom: 0;
}

/* Style the description */
p:first-child {
  font-weight: bold;
}

/* Style the language */
p:nth-child(4) {
  text-transform: capitalize;
}

/* Style the private status */
p:last-child {
  text-transform: capitalize;
  color: #7251b5;
}

/* Add responsive design */
@media (max-width: 600px) {
  .first {
    padding: 10px;
  }
}
  .second {
    font-size: 36px;
  }

  p {
    font-size: 30px;

  }

  .pr {
    margin-bottom: 30px;
    font-size: 30px;
  }
  .home-button {
    padding: 18px 30px;
    border-radius: 5px;
    background-color: #7251b5;
    color: #fff;
    font-size: 30px;
    border: none;
    margin-right: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

</style>
