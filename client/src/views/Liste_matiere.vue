<template>
  <div id="Liste_questionnaire">
    <router-link to="/Correcteur"><button>Accueil</button></router-link>
    <br />
    <br />
    <h4>Liste questionnaire</h4>
    <br />
    <br />
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th style="width: 20%">Nom questionnaire</th>
            <th style="width: 20%">Code</th>
            <th style="width: 20%">Supprimer</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-bind="nom_questionnaire"
            v-for="v in nom_questionnaire"
            :key="v.nom_questionnaire"
          >
            <td>{{ v.nom_questionnaire }}</td>
            <td>{{ v.code }}</td>

            <td><button @click="supprimer(v._id)">x</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>

export default {
  name: "Liste_questionnaire",

  data: function () {
    return {
      nom_questionnaire: "",
      code: "",
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
          this.code = JSON.parse(result);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },

    supprimer(id) {
      console.log(id);
      const requestOpt = {
        method: "POST",
        body: JSON.stringify({
          id: id,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      };

      fetch("http://localhost:3000/success/deleteMatiere2", requestOpt)
        .then((result) => {
          this._id = result;
        })
        .catch((error) => {
          console.log("error", error);
        });
        setTimeout(
        function () {
          window.location.reload();
        }.bind(this),
        50
      );
    },
  },
  created() {
    this.tirer();
  },
};
</script>