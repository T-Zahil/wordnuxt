<template>
  <div class='categories'>
    <div v-for="item in categories" :key="item.id" v-if="item.id > 1">
      <nuxt-link :to="slugToUrl(item.slug)">{{ item.name }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'categories',
  methods: {
    slugToUrl(slug) {
      return `/category/${slug}`
    }
  },
  computed: {
    categories: function() {
      return this.$store.state.categories
    }
  }
}
</script>

<style lang="scss">
.categories {
  display: flex;
  align-items: center;
  div {
    margin: 0 1rem;
  }
}
</style>
