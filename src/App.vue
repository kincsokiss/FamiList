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
    --primary: #4ade80;
    --grey: #64748b;
    --dark: #1e293b;
    --dark-alt: #334155;
    --light: #f1f5f9;
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

