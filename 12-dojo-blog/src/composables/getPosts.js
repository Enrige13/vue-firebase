import { ref } from 'vue'
import { projectFirestore } from '../../firebase/config'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const res = await projectFirestore.collection('posts').get()
            // .collection() - connection to firestore collection posts
            // .get() - gets the data (async)
            // console.log(res) - console.log(res.docs) 
            // docs - document array

            posts.value = res.docs.map(doc => {
                // console.log(doc.data())
                return { ...doc.data(), id: doc.id } // grab all 3 values and adds it to the object, and id property
            })
        } 
        catch (err) {
            error.value = err.message
            console.log(err.value)
        }
    }

    return { posts, error, load }
}

export default getPosts
