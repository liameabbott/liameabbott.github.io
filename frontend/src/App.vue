<template>
  <div id="app">
    <b-container>
      <b-navbar toggleable="md">
            <b-navbar-brand class="mr-auto"><h2 id="my-name">Liam Abbott</h2></b-navbar-brand>
            <b-navbar-nav>
              <b-nav-item to="about">About</b-nav-item>
              <b-nav-item to="work">Work</b-nav-item>
              <b-nav-item to="resume">R&#233;sum&#233;</b-nav-item>
              <b-nav-item href="https://github.com/liameabbott" target="_blank"><font-awesome-icon :icon="githubIcon"></font-awesome-icon></b-nav-item>
              <b-nav-item href="https://www.linkedin.com/in/liameabbott" target="_blank"><font-awesome-icon :icon="linkedinIcon"></font-awesome-icon></b-nav-item>
            </b-navbar-nav>
          </b-navbar>
    </b-container>
    <router-view></router-view>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
export default {
  name: 'app',
  computed: {
    githubIcon () {
      return faGithub
    },
    linkedinIcon () {
      return faLinkedin
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style>
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#my-name {
  margin-bottom: 0;
  font-weight: 700;
  letter-spacing: 1px;
}
</style>
