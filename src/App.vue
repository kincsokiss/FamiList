<template>
  <ion-app >
    <HeaderVue/>    
    <ion-page id="main-content" :fullscreen="true">
      <ion-content>
        <router-view/>
        
      </ion-content>
    </ion-page>
  </ion-app>
</template>

<script setup>
  import HeaderVue from './views/HeaderItem.vue';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  import { onMounted } from 'vue';
  import { IonApp, IonPage, IonContent } from '@ionic/vue';

  const router = useRouter();
  
  onMounted(() => {
    const auth = getAuth();
    
    console.log(auth);
    onAuthStateChanged(auth, (user) => {
      if (!user){
        router.push('/');
      }
      else {
        router.push('/main-page');
      }
    })
})
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

  ion-page {
    --background: #f7d6c5;
  }
</style>

