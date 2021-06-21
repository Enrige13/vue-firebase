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
import { ref } from 'vue'
import { projectFirestore } from '../../firebase/config'

export default {
    props: ['posts'],
    components: {
        SinglePost
    },
    setup(props) {
        const posts = ref([])

        projectFirestore.collection('posts')
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let docs = snap.docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                })

                posts.value = docs
            }) 

        return { posts }
    },
}
</script>

<style>

</style>
