<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">clicke me</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  setup() { // läuft als erstes - $refs nicht verfügbar (undefined)
    // console.log('setup')

    // const p = ref(null)
    // // const p = ref('hello')
    // // console.log(p, p.value)

    // let name = 'mario' // not reactive values
    // let age = 30

    const name = ref('mario') // now reactive
    const age = ref(30)

    const handleClick = () => {
      name.value = 'luigi'
      age.value = 35
      // console.log('you clicked me')
      // // console.log(p, p.value)
      // // p.value.classList.add('test')
      // // p.value.textContent = 'hello, ninjas'
    }

    return {
      name, age, handleClick
      // , p
      // name: name,
      // age: age
    }
  },
  // created() {
  //   console.log('created')
  // },
  // mounted() {
  //   console.log('mounted')
  // }
}
</script>
