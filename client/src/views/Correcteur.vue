<template>
  <div id="Correcteur">
    <nav-bar />
    <router-link to="/"><button>Accueil</button></router-link>
    <br />
    <h1>Espace Correcteur</h1>
    <router-link to="/New_questions"
      ><br />
      <button>Créer des questions</button></router-link
    >
    <br />
    <br />
    <router-link to="/New_matiere"
      ><button>Créer des questionnaires</button></router-link
    >

    <router-link to="/New_user"
      ><button>Créer des utilisateurs</button></router-link
    >

    <router-link to="/User_list"
      ><button>Liste des utilisateurs</button></router-link
    >

    <router-view />

    <br />
    <br />
    <br />
    <br />
    <h1>Espace Correcteur</h1>
    <br />
    <h2>Correction:</h2>
    <br />
    <h4>SQL:</h4>
    <progress id="file" max="100" value="70">70%</progress>
    <br />
    <h4>html:</h4>
    <progress id="file" max="100" value="60">60%</progress>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "Collaborateur",
  components: { NavBar },
};
</script>

