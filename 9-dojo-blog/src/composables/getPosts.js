import { ref } from 'vue'

const getPosts = () => {
    const posts = ref([
        //   { title: 'welcome to the blog', body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', id: 1 },
        //   { title: 'top 5 css tips', body: 'Lorem ipsum', id: 2 },
    ])
    const error = ref(null)

    const load = async () => {
        try {
            // simulate delay
            await new Promise(resolve => {
                setTimeout(resolve, 2000)
            })
            
            let data = await fetch('http://localhost:3000/posts')
            //   console.log(data)
            if (!data.ok) {
                throw Error('no data available')
            }
            posts.value = await data.json() // asynchron
        } 
        catch (err) {
            error.value = err.message
            console.log(err.value)
        }
    }

    return { posts, error, load }
}

export default getPosts
