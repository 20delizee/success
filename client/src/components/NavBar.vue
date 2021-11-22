<template>
  <nav class="navbar navbar-dark fixed-top bg-dark off-canvas">
    <div class="container-fluid d-flex flex-column p-0">
      <div class="d-flex justify-content-between brand-line">
        <router-link to="/" class="navbar-brand">S11</router-link>
        <button
          class="btn btn-dark navBarIwaBtn"
          type="button"
          data-dismiss="drawer"
        >
          <span class="sr-only">Toggle Navigation&nbsp;</span>
          <i class="fas fa-times"></i>
        </button>
      </div>
      <ul id="accordionSidebar" class="navbar-nav text-light">
        <li class="nav-item">
          <router-link to="/New_questions" class="nav-link"
            >Créer des questions</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/New_matiere" class="nav-link"
            >Créer un questionnaire</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/Liste_questionnaire" class="nav-link"
            >Liste des questionnaires</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/New_user" class="nav-link"
            >Créer un utilisateur</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/User_list" class="nav-link"
            >Liste utilisateurs</router-link
          >
        </li>

        <li><router-link to="/" class="nav-link"> Se déconnecter</router-link></li>

       
      </ul>
      <br />
      
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
