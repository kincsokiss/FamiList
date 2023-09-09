<template>
  <ion-app>
    <HeaderVue/>    
    <ion-page id="main-content">
      <router-view/>
    </ion-page>
  </ion-app>
</template>

<script>
import HeaderVue from './views/Header.vue';
// import FooterVue from './views/Footer.vue';

export default {
    name: 'App',
    components: {
      HeaderVue,
      // FooterVue,
  },
};
</script>

<style scoped>
  :root {
    --primary: #d87f79;
    --grey: #4d433d;
    --dark: #191514;
    --dark-alt: #312b27;
    --light: rgb(247, 214, 197);
  }

  button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background-color: none;
  }

  ion-note {
    display: inline-block;
    font-size: 16px;

    color: var(--ion-color-medium-shade);
  }
  
</style>

