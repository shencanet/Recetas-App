<script setup>
import swal from 'sweetalert';
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';
import Meal from './components/Meal.vue'
import Category from './components/Category.vue'
</script>

<template >

<h3>"Api Restauracion || Santi Dionis"</h3><br />

    <h3>Buscador Recetas</h3>
    <input type="text" 
    v-model="search" 
    v-on:keyup.enter="searchData" 
    placeholder="Buscador Aqui "
    class="search-input" />

    <Meal 
    v-for="meal in meals" 
    v-bind:key="meal.idMeal" 
    v-bind:meal="meal"/>

  <div class="text-center">
    ...
  </div>
  <h3>o Busca por categoria</h3>
   
 

  <Category 
  v-for="category in paginated" 
  v-bind:key="category.idCategory" 
  v-bind:category="category" />

 

  <div class="text-center">
    <a @click="prev()">Anterior</a>
    -----------------------------------------------------------
    <a @click="next()">Siguiente</a>
   
  </div>


</template>

<script>
export default {
  name: 'App',
  components: {
    Category,
    Meal,

  },
  data() {
    return {
      categories: [],
      meals: [],
      search: null,
      current: 1,
      pageSize: 6,

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
    indexStart() {
      return (this.current -1) * this.pageSize;

    },
    indexEnd(){
      return this.indexStart + this.pageSize;

    },
    paginated(){
      return this.categories.slice(this.indexStart, this.indexEnd)
    }
  },




  methods: {
    searchData() {
      //alert('aqui shen')
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

        swal({
            title: "Ingresa un texto",
            text: "Atencion",
            icon: "error",
        });
        
      }


    },
    prev(){
      this.current--;
    },
    next(){
      this.current++;
    }
  }
}
</script>


<style>



#app{
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.category_container {
  border: 1px solid green;
  padding: 50px;
  border-radius: 25px;





}
.search-input{
  border: none;
  border-bottom: 1px solid rgb(190, 149, 27);
  min-height: 20px;
  margin-top: 20px;
  margin-bottom: 20px;


  

}
*{
  font-family: monospace;
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
