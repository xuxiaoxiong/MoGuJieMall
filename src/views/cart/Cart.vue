<template>
  <div>
    <div v-for="index in 5" :key="index">
      hahaha
      {{index}}
    </div>
  </div>

</template>

<script>
    export default {
        name: "Cart",
        data(){
            return {

            }
        }
    }
</script>

<style scoped>

</style>
