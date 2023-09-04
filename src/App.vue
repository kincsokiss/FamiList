<template>
  <ion-app>
    <HeaderVue v-if="isVisible"/>    
    <ion-page id="main-content">
      <router-view/>
    </ion-page>
  </ion-app>
</template>

<script>
import HeaderVue from './views/Header.vue';
// import FooterVue from './views/Footer.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default {
    name: 'App',
    components: {
      HeaderVue,
      // FooterVue,
    },

    data(){
      return{ isVisible: false }
    },

    created() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if(user){
          this.$router.push('/main-page');
          this.isVisible = true;
          console.log(user.uid)
        } else {
          this.isVisible = false;
          this.$router.push('/');
        }
      })
    }
    
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

