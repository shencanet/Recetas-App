<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h2 class="green">{{ msg }}</h2>
  
  </div>
</template>

<style scoped>
h2 {
  font-weight: 400;
  font-size: 2rem;
  margin-top: 25px;
  top: 5px;
}

h3 {
  font-size: 1.2rem;
  margin-top: 50px;
  text-align: center;
}

.greetings h1,
.greetings h3 {
  text-align: center;
  margin-left: 300px;
  

  
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
