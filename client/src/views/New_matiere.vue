<template>
  <div id="New_questionnaires">
    <router-link to="/Correcteur"><button>Accueil</button></router-link>
    <br />
    <br />
    <h1>Création de questionnaires</h1>
    <br />
    <br />
    <h4>Créer des questions</h4>
    <br />
    
    <input type="text" v-model="nom_questionnaire" />
    <br />
    <br />
    <h4>Code du questionnaire</h4>

    <input type="text" v-model="code" />
    <br />
    <br />
    <button
      @click="creer"
      class="btn btn-danger btn-lg"
      type="button"
      role="button"
      data-bss-hover-animate="pulse"
    >
      Créer le questionnaire
    </button>
    <br />
    <br />
    
  </div>
</template>
<script>
export default {
  name: "New_questionnaire",

  data: function () {
    return {
      nom_questionnaire: "",
      code: "",
    };
  },
  methods: {
    creer() {
      const requestOpt = {
        method: "POST",
        body: JSON.stringify({
          nom_questionnaire: this.nom_questionnaire,
          code: this.code,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      };
      fetch("http://localhost:3000/success/saveMatiere", requestOpt)
        .then((response) => response.text())
        // Sucess

        .catch((error) => {
          console.log("error", error);
        });
      this.nom_questionnaire = "";
      this.code = "";
    },

  },
  
};
</script>