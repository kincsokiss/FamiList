<template>
  <SideBar/>
    <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button v-if="isVisible"></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
        <ion-fab v-if="isVisible" vertical="top" horizontal="end">
          <ion-fab-button size="small">
            <ion-icon :icon="personCircleOutline"></ion-icon>
          </ion-fab-button>

          <ion-fab-list side="bottom">
            <ion-fab-button @click="goToUserSettings">
              <ion-icon :icon="settingsOutline"></ion-icon>
            </ion-fab-button>

            <ion-fab-button @click="signOutUser">
              <ion-icon :icon="logOutOutline"></ion-icon>
            </ion-fab-button>
          </ion-fab-list>
        </ion-fab>
    </ion-header>
  </template>
  
  <script setup>
  import SideBar from './SideBar.vue';
  import { getAuth, signOut } from 'firebase/auth';
  import { IonFab, IonToolbar, IonButtons, IonMenuButton, IonFabButton, IonFabList, IonHeader, IonIcon } from '@ionic/vue';
  import { personCircleOutline, settingsOutline, logOutOutline } from 'ionicons/icons' 
  import { onMounted, ref } from 'vue';
  import { useRouter } from "vue-router";
  import firebaseDb from '../modules/firebase';

  const router = useRouter();
  const isVisible = ref(false);
  
  onMounted(async() => {
    isVisible.value = await firebaseDb.isUserLoggedIn();
  })

  function goToUserSettings(){
    router.push('/user-detail-page')
  }

  function signOutUser(){
    const auth = getAuth();
    signOut(auth).then(() => {
        router.push('/')
    }).catch((error) => {
        console.log('signOutUser has failed: ', error)
    })
  }

 </script>

 <style scoped>
  ion-fab-button::part(native){
    background-color: #994d4e;
  }
  
  ion-fab{
    top: -13%;
  }
</style>