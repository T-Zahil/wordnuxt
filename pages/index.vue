<template>
  <div>
    <theMenu></theMenu>
    <section class="hero is-info is-medium is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            The new standard in &lt;insert industry here&gt;
          </h1>
          <h2 class="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import theMenu from '../components/menu'

export default {
  components: {
    theMenu
  },
  created() {
    // init categories
    this.$store.dispatch('getCategories')
  }
}
</script>

<style lang="scss">
html,
body {
  background: #eff3f4;
  font-family: 'Open Sans', serif;
}
.hero-body .container {
  max-width: 700px;
}
.hero-body .title {
  color: hsl(192, 17%, 99%) !important;
}
.hero-body .subtitle {
  color: hsl(192, 17%, 99%) !important;
  padding-top: 2rem;
  line-height: 1.5;
}
.features {
  padding: 5rem 0;
}
.box.cta {
  border-radius: 0;
  border-left: none;
  border-right: none;
}
.card-image > .fa {
  font-size: 8rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: #209cee;
}
.card-content .content {
  font-size: 14px;
  margin: 1rem 1rem;
}
.card-content .content h4 {
  font-size: 16px;
  font-weight: 700;
}
.card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  margin-bottom: 2rem;
}
.intro {
  padding: 5rem 0;
  text-align: center;
}
.sandbox {
  padding: 5rem 0;
}
.tile.notification {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.is-shady {
  animation: flyintoright 0.4s backwards;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 0;
  border-radius: 4px;
  display: inline-block;
  margin: 10px;
  position: relative;
  transition: all 0.2s ease-in-out;
}
.is-shady:hover {
  box-shadow: 0 10px 16px rgba(0, 0, 0, 0.13), 0 6px 6px rgba(0, 0, 0, 0.19);
}
</style>
