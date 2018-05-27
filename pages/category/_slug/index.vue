<template>
  <div class='category'>
    <section class="hero">
      <div class="container">
        <h1 class="title is-1">{{ category.name }}</h1>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <post-list v-if="posts" :posts="category_posts" :title="slug"></post-list>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '~/api/index'
import postList from '~/components/postList.vue'

export default {
  name: 'category',
  components: { postList },
  async asyncData({ params }) {
    let { posts } = await api.getCategory(params.slug)
    return {
      category_posts: posts,
      slug: params.slug
    }
  },
  computed: {
    ...mapGetters(['category', 'posts', 'categories'])
  },
  mounted() {
    // dispatch the category
    this.$store.dispatch('getCategory', this.$route.params.slug)
    // dispatch the posts
    this.$store.dispatch('getPosts')
  },
  methods: {
    slugToUrl(slug) {
      return `/${slug}`
    }
  }
}
</script>