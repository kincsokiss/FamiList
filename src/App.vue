<template>
  <ion-app mode="ios"> 
    <!-- ezt majd torold ki!!!!!!!!! -->
    <HeaderVue :showMenu="showMenu"/>    
    <ion-page id="main-content" :fullscreen="true">
      <ion-content style="color: white;">
        <router-view/>
      </ion-content>
    </ion-page>
  </ion-app>
</template>

<script setup>
  import HeaderVue from './views/HeaderItem.vue';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  import { onMounted, ref } from 'vue';
  import { IonApp, IonPage, IonContent } from '@ionic/vue';

  const router = useRouter();
  const showMenu = ref();
  
  
  onMounted(() => {
    console.log("APP.VUE BROOOOOOOO")
    const auth = getAuth();
    
    console.log(auth);
    onAuthStateChanged(auth, (user) => {
      if (!user){
        showMenu.value = false;
        router.push('/user-settings');
      }
      else {
        showMenu.value = true;
      }
    })

    console.log(showMenu.value);
  })
</script>
