<template>
  <div id="Questionnaire_pass">
          <router-link to="/Collaborateur"><button>Accueil</button></router-link>
    <br/>
    <br/>
    <h3>Liste des questionnaires</h3>
    <h4>
      <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th style="width: 20%">Nom questionnaire</th>
            <th style="width: 20%">passe</th>
            <th style="width: 20%">passer le questionnaire</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-bind="nom_questionnaire"
            v-for="v in nom_questionnaire"
            :key="v.nom_questionnaire"
          >
            <td>{{ v.nom_questionnaire }}</td>
            <td>{{ v.passe }}</td>

            <td><button @click="passe()"><router-link to="/Questionnaire">x</router-link></button></td>
          </tr>
        </tbody>
      </table>
    </div>
    
    </h4>
  </div>
</template>

<script>
export default {
  name: "Questionnaire_pass",

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
    //passe() {
      //const requestOpt = { method: "GET", redirect: "follow" };
      //fetch("http://localhost:3000/success/getRandUs", requestOpt)
        //.then((response) => response.text())
        // Sucess
//        .then((result) => {
  //        this.nom_questionnaire = JSON.parse(result);
    //    })
      //  .catch((error) => {
        //  console.log("error", error);
        //});
    //},
  },

  created() {
    this.tirer();
  },
};
</script>
