import { ref } from 'vue'
import { projectAuth, projectFirestore } from '../firebase/config'

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection)
        .orderBy('createdAt')

    collectionRef.onSnapshot((snap) => {
        let results = []

        snaps.doc.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        }) // without doc.data().createdAt - only local version of snapshot + timestamp

        documents.value = results
        error.value = null
    }, () => {
        console.log(err.message)
        documents.value = nullerror.value = 'could not fetch data'
    })

    return { documents, error }
}

export default getCollection