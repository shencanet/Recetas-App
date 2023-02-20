<script setup>

import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';
import Meal from './components/Meal.vue'
import Category from './components/Category.vue'
</script>

<template>
  <HelloWorld msg="Api Restauracion || Santi Dionis" />
  <h1>Buscador Recetas</h1>
  <input type="text" v-model="search" v-on:keyup.enter="searchData" placeholder="Buscador Aqui ">
  <Meal 
  v-for="meal in meals" 
  v-bind:key="meal.idMeal" 
  dv-bind:meal="meal" />


  <div class="text-center"> 
  <h3>. Busca por categoria</h3></div>
  
  <Category 
  v-for="category in categories" 
  v-bind:key="category.idCategory" 
  v-bind:category="category" 
  />
</template>

<script>
export default {
  name: 'App',
  components: {
    Category,
    
  },
  data() {
    return {
      categories: [],
      meals: [],
      search: null,
      //Paginacion
      current: 1,
      pageSize: 5,

    };
  }, mounted() {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((res) => {
        console.log(res.data.categories);




        this.categories = res.data.categories;


      })
      .catch((err) => {
        console.log(err)
      })
  },

  computed: {
    indexStart(){
      return (this.current -1)
    }
  },




  methods: {
    searchData() {
      if (this.search) {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + this.search)
          .then((res) => {
            this.meals = res.data.meals;

            //idMeal strCategory  strMealThumb


          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        alert('Ingresa un texto')
      }


    }
  }
}
</script>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.category_container {
  border: 1px solid green;
  padding: 50px;
  border-radius: 50px;
  margin-top: 25px;
  margin-left: 20px;


}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

}
</style>
