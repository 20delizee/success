import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Collaborateur from '../views/Collaborateur.vue'
import Correcteur from '../views/Correcteur.vue'
import Questionnaire from '../views/Questionnaire.vue'
import New_matiere from '../views/New_matiere.vue'
import New_questions from '../views/New_questions.vue'
import New_user from '../views/New_user.vue'
import User_list from '../views/User_list.vue'
import Liste_questionnaire from '../views/Liste_matiere.vue'
import Questionnaire_pass from '../views/Questionnaire_pass.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/Collaborateur',
    name: 'Collaborateur',
    component: Collaborateur
  },
  {
    path: '/Correcteur',
    name: 'Correcteur',
    component: Correcteur
  },
  {
    path: '/Questionnaire',
    name: 'Questionnaire',
    component: Questionnaire
  },
  {
    path: '/New_matiere',
    name: 'New_matiere',
    component: New_matiere
  },
  {
    path: '/New_questions',
    name: 'New_questions',
    component: New_questions
  },
  {
    path: '/New_user',
    name: 'New_user',
    component: New_user
  },
  {
    path: '/User_list',
    name: 'User_list',
    component: User_list
  },
  {
    path: '/Liste_questionnaire',
    name: 'Liste_questionnaire',
    component: Liste_questionnaire
  },
  {
    path: '/Questionnaire_pass',
    name: 'Questionnaire_pass',
    component: Questionnaire_pass
  }
]




const router = new VueRouter({
  routes
})

export default router
