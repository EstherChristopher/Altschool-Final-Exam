<template>
  <div class="hello">
    <header class="hitext">
      <h1>My List of GitHub Repositories</h1>
    </header>
    <ul>
      <li v-for="repo in repositories" :key="repo.id">
        <router-link class="rlink"
          :to="{ name: 'SpecificRepo', params: { reponame: repo.name } }"
          >{{ repo.name }}</router-link>
      </li>
    </ul>

    <div>
      <button @click="prevPage">Previous</button> 
      <button @click="nextPage">Next</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  components: {},
  data() {
    return {
      repositories: [],
      page: 1,
      eachPage: 5,
      lastPage: " ",
      username: "EstherChristopher",
    };
    // The pagination will be in this main page to allow navigation between each repository
  },
  methods: {
    async fetchRepositories() {
      const response = await axios.get(
        `https://api.github.com/users/${this.username}/repos`,
        {
          params: {
            page: this.page,
            per_page: this.eachPage,
          },
        }
      );
      this.repositories = response.data;
      const totalCount = parseInt(response.headers["x-total-count"]);
      this.lastPage = Math.ceil(totalCount / this.perPage);
    },


// async function fetchDetails (username) {
//   try {
//     const response = await axios.get(`https://api.github.com/users/${username}`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }

    nextPage() {
      this.page++;
      this.fetchRepositories();
    },
    prevPage() {
      this.page--;
      this.fetchRepositories();
    },
  },
  mounted() {
    this.fetchRepositories();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello, html, body {
  height: 100%;
  max-width: 1000px;
  min-height: 100%;
  margin: 0 auto;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}


header {
  text-align: center;
  margin-bottom: 50px;
}

header h1 {
  font-size: 36px;
  color: #555;
  text-shadow: 1px 1px 1px #ccc;
  /* margin-bottom: 50px; */
}

.hitext {
  padding-top: 30px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 30px;
}

li {
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
}

li a {
  display: block;
  padding: 50px;
  border-radius: 5px;
  background-color: #fff;
  color: #555;
  text-decoration: none;
  transition: background-color 0.3s ease;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
  font-size: 30px;
}

li a:hover {
  background-color: #7251b5;
  color: #fff;
}

/* Style the pagination */
div {
  text-align: center;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #7251b5;
  color: #fff;
  border: none;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ba93d8;
  color: #fff;
}

</style>
