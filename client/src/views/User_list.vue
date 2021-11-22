<template>
  <div id="User_list">
    <router-link to="/Correcteur"><button>Accueil</button></router-link>
    <br />
    <br />

    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th style="width: 20%">ID</th>
            <th style="width: 20%">Nom</th>
            <th style="width: 20%">Prenom</th>
            <th style="width: 20%">Supprimer</th>
          </tr>
        </thead>
        <tbody>
          <tr v-bind="id_user" v-for="v in id_user" :key="v._id">
            <td>{{ v.id_user }}</td>
            <td>{{ v.nom }}</td>
            <td>{{ v.prenom }}</td>
            <td><button @click="supprimer(v._id)">x</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "User_list",
  data: function () {
    return {
      id_user: "",
      nom: "",
      prenom: "",
    };
  },
  methods: {
    tirer() {
      const requestOpt = { method: "GET", redirect: "follow" };
      fetch("http://localhost:3000/success/getUser", requestOpt)
        .then((response) => response.text())
        // Sucess
        .then((result) => {
          this.id_user = JSON.parse(result);
          this.nom = JSON.parse(result);
          this.prenom = JSON.parse(result);
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

      fetch("http://localhost:3000/success/deleteUser", requestOpt)
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


<style>
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid black;
}
</style>