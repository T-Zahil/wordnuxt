<template>
  <div class='category'>
    {{ category.name }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '../../../api/index'

export default {
  name: 'category',
  async asyncData({ params }) {
    let { posts } = await api.getCategory(params.slug)
    return {
      category_posts: posts,
      slug: params.slug
    }
  },
  computed: {
    ...mapGetters(['category', 'categories'])
  },
  mounted() {
    this.$store.dispatch('getCategory', this.$route.params.slug)
  }
}
</script>