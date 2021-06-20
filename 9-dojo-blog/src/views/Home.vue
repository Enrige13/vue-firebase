<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
        <PostList :posts="posts" />
        <TagCloud :posts="posts" /> <!-- already fetched the posts in Home comp -->
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
import TagCloud from '../components/TagCloud.vue'

export default {
  name: 'Home',
  components: {
      PostList,
      Spinner,
      TagCloud
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

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>