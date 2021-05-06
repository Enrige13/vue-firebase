// control only a part of the app
const app = Vue.createApp({
    // data, functions, component template
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        // changeTitle(title) {
            // this.title = 'Words of Randiance'
            //this.title = title
            // console.log('you clicked me')
        // }
        toogleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e) {
            console.log(e)
        }
    }
})

app.mount('#app')

// console.log('hello, vue')
