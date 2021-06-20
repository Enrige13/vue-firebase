<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
        <PostList :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
    <!-- <PostList v-if="showPosts" :posts="posts" /> -->
    <!-- <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button> -->
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'Home',
  components: {
      PostList,
      Spinner
  },
  setup() {
    const { posts, error, load } = getPosts()
    
    load()

    return {
        posts, error
    //   showPosts
    }
  },
}
</script>
