<template>
  <div id="New_user">
    <router-link to="/Correcteur"><button>Accueil</button></router-link>
    <br />
    <br />
    <h1>Créer des utilisateurs</h1>
    <br />
    <h4>id user:</h4>
    <input type="text" v-model="id_user" />

    <br />
    <br />
    <h4>nom:</h4>
    <input type="text" v-model="nom" />
    <br />
    <br />
    <h4>prenom:</h4>
    <input type="text" v-model="prenom" />
    <br />
    <br />
    <h4>mot de passe:</h4>
    <input type="password" v-model="password" />
    <br />
    <br />
    <h4>type de compte:</h4>
    <select v-model="user_account">
      <option value="collaborateur">collaborateur</option>
      <option value="correcteur">correcteur</option>
    </select>
    <br />
    <br />
    <h2>
      <button
        @click="envoyer"
        class="btn btn-danger btn-lg"
        type="button"
        role="button"
        data-bss-hover-animate="pulse"
      >
        Créer l'utilisateur
      </button>
    </h2>
  </div>
</template>
<script>
export default {
  name: "New_user",

  data: function () {
    return {
      id_user: "",
      nom: "",
      prenom: "",
      user_account: "",
      password: ""
    };
  },
  methods: {
    envoyer() {
      const requestSend = {
        method: "POST",
        body: JSON.stringify({
          id_user: this.id_user,
          nom: this.nom,
          prenom: this.prenom,
          user_account: this.user_account,
          password: this.password
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      };

      fetch("http://localhost:3000/success/saveUser", requestSend)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log("error", error);
        });
      this.id_user = "";
      this.nom = "";
      this.prenom = "";
      this.user_account = "";
      this.password = "";
    },
  },
};
</script>