<template>
  <div class="postList">
    <div class="box" v-for="item in posts" :key="item.id">
      <div class="box-header">
        <h4 class="title is-4">
          {{ item.title }}
        </h4>
      </div>
      <div class="box-content">
        <div class="columns">
          <div class="column is-4">
            <img :src="item.thumbnail">
          </div>
          <div class="column">
            <div class="box-content-text">
              <p v-html="item.excerpt"></p>
            </div>
            <div class="has-text-right">
              <nuxt-link class="button is-small" :to="slugToUrl(item.slug)">read more</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['posts', 'title'],
  async asyncData({ params }) {
    let { thumbnail } = await api.getCategory(params.slug)
    return {
      category_posts: posts,
      slug: params.slug
    }
  },
  methods: {
    slugToUrl(slug) {
      return `/${slug}`
    }
  }
}
</script>