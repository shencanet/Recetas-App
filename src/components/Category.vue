<template>
    <div class="category_container">
    <img v-bind:src="category.strCategoryThumb">
    <h6>{{ category.strCategory }}</h6>
    <p>{{ category.strCategoryDescription }}</p>

    </div>
</template>
<script>

export default {
    props: ["category"]
}

</script>