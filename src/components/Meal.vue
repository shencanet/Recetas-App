<template>

    <div class="category_container">
        <img v-bind:src="meal.strMealThumb">
        <h6>{{ meal.strMeal }}</h6>
        <p><b>Categoria</b>: {{ meal.strCategory }} | Origen: {{ meal.strArea }} </p>

    </div>
</template>
<script>

export default {
    props: ["meal"]
}

</script>