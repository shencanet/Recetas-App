<template>

    <div class="category_container">
        <img class="foto" v-bind:src="meal.strMealThumb" >
        <h6>{{ meal.strMeal }}</h6>
        <p><b>Categoria</b>: {{ meal.strCategory }} | Origen: {{ meal.strArea }} </p>

    </div>
</template>
<script>

export default {
    props: ["meal"]
}

</script>

<style scoped>
.foto{
    width: 400px;
    height: 400px;
    border-radius: 25px;
    border: 1px solid blue;
}
</style>