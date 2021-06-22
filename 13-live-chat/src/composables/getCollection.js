import { ref } from 'vue'
import { projectAuth, projectFirestore } from '../firebase/config'

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)
    // register the firestore collection reference
    let collectionRef = projectFirestore.collection(collection)
        .orderBy('createdAt')

    collectionRef.onSnapshot(snap => {
        let results = []

        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        }) // without doc.data().createdAt - only local version of snapshot + timestamp

        documents.value = results
        error.value = null
    }, err => {
        console.log(err.message)
        documents.value = null
        error.value = 'could not fetch data'
    })

    return { documents, error }
}

export default getCollection
