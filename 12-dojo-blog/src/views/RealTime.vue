<template>
    <div>
        <h1>Real-time data</h1>
        <div v-for="post in posts" :key="post.id">
            <div>
                {{ post.title }}
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { projectFirestore } from '../../firebase/config'

export default {
    setup() {
        const posts = ref([])

        projectFirestore.collection('posts')
            .orderBy('createdAt', 'desc') // only runs ones to get data (need to refresh)
            .onSnapshot((snap) => {
                // console.log(snap)
                let docs = snap.docs.map(doc => {
                    return { ...doc.data(), id: doc.id } // new object with data
                })
                // console.log('documents: ', docs)
                posts.value = docs
            }) 
            // real-time listener for firebase
            // a snapshot what it looks like at any given time and updates everytime there are changes
    
        return { posts }
    }
}
</script>

<style>

</style>