<template>
  <div class="post-list">
      <div v-for="post in posts" :key="post.id">
          <SinglePost :post="post" />
      </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
import { onMounted, onUnmounted, onUpdated } from 'vue'

export default {
    props: ['posts'],
    components: {
        SinglePost
    },
    setup(props) {
        // console.log(props.posts)1
        // onMounted(() => console.log('component mounted'))
        // onUnmounted(() => console.log('component unmounted'))
        // onUpdated(() => console.log('component updated'))
    },
}
</script>

<style>

</style>
