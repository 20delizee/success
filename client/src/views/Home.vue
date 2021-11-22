<template>
  <div class="home">
    <br />
    <h1>Connectez vous</h1>
    <br />
    <h3>Identifiant:</h3>

    <input type="text" v-model="id_user" />
    <br />
    <br />
    <h3>Mot de passe:</h3>

    <input type="password" v-model="password" />
    <br />
    <br />
    <button
      @click="login"
      class="btn btn-danger btn-lg"
      type="button"
      role="button"
      data-bss-hover-animate="pulse"
    >
      se connecter(pas fonctionnel)
    </button>

    <br />
    <br />
    <router-link to="/Correcteur"><button>Correcteur</button></router-link>
    <router-view />
    <br />
    <br />
    <router-link to="/Collaborateur"
      ><button>Collaborateur</button></router-link
    >
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      id_user: "",
      password: "",
    };
  },
  methods: {
    login() {
      const requestOpt = { method: "GET", redirect: "follow" };
      fetch("http://localhost:3000/success/login", requestOpt)
        .then((response) => response.text())

        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>
