<template>
  <nav class='navbar menu'>
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="../">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Logo">
        </a>
        <span class="navbar-burger burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item is-active">
            Accueil
          </a>
          <categories></categories>
          <span class="navbar-item">
            <a class="button is-white is-outlined is-small" href="https://github.com/dansup/bulma-templates/blob/master/templates/hero.html">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
              <span>View Source</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import categories from './categories'

export default {
  name: 'theMenu',
  components: { categories }
}
</script>