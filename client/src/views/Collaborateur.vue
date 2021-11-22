<template>
  <div id="Collaborateur">
    <router-link to="/"><button>Accueil</button></router-link>
    <br />
    <br />
    <h1>Espace Collaborateur</h1>
    <br />
    <br />
    <h2>Questionnaire passé:</h2>
    <br />
    <h4>test SQL reussite:</h4>
    <progress id="file" max="100" value="70">70%</progress>
    <br />
    <h4>test html reussite:</h4>
    <progress id="file" max="100" value="60">60%</progress>
    
    <br />
    <br />

    <router-link to="/Questionnaire_pass">
      <button>Passer un questionnaire</button></router-link
    >
    <router-view />
  </div>
</template>

<script>

export default {
  name: "Collaborateur",
  data: function () {
    return {
      nom_questionnaire: "",
    };
  },
  methods: {
    tirer() {
      const requestOpt = { method: "GET", redirect: "follow" };
      fetch("http://localhost:3000/success/getMatiere", requestOpt)
        .then((response) => response.text())
        // Sucess
        .then((result) => {
          this.nom_questionnaire = JSON.parse(result);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
  created() {
    this.tirer();
  },
};
</script>

<style>
#app {

  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>