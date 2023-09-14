<template>
  <div class="home--image--welcome">
    <div class="image--welcome">
      <img src="../assets/img/man_computer.svg" alt="computer man ">
    </div>
    <div class="text--welcome">
      <!-- Bienvenido  -->
      <h1>Bienvenido a mi portafolio.</h1>
      <!-- social media -->
      <!-- <div class="redes-sociales">
        <RedesSociales />
      </div> -->
    </div>
  </div>
</template>
<script setup>
  import RedesSociales from './RedesSociales.vue';
</script>
<script>
export default {
  name: "Contacto",
};
</script>
<style scoped>
.image--welcome img {
  width: 30em;
}
.text--welcome span {
  font-size: 2.5em;
}
.home--image--welcome{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
</style>