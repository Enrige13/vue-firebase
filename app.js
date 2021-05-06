// control only a part of the app
const app = Vue.createApp({
    // data, functions, component template
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            url: 'http://www.example.com',
            showBooks: true,
            // title: 'The Final Empire',
            // author: 'Brandon Sanderson',
            // age: 45,
            // isFav - dynamic class
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true},
                { title: 'the way of kings', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: false},
                { title: 'the final empire', author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: true},
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        // changeTitle(title) {
            // this.title = 'Words of Randiance'
            //this.title = title
            // console.log('you clicked me')
        // }
        toogleFav(book) {
            book.isFav = !book.isFav
        },
        toogleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX,
            this.y = e.offsetY
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')

// console.log('hello, vue')
