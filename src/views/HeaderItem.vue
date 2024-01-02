<template>
  <SideBar/>
    <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button v-if="showMenu"></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
        <ion-fab v-if="showMenu" vertical="top" horizontal="end">
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
  import { watch, ref } from 'vue';
  import { useRouter } from "vue-router";

  const router = useRouter();
  const props = defineProps([
    'showMenu'
  ])

  const show_menu = ref(false);

  function goToUserSettings(){
    router.push('/user-detail-page')
  }

  function signOutUser(){
    const auth = getAuth();
    signOut(auth).then(() => {
        router.push('/user-settings') 
        show_menu.value = false;
    }).catch((error) => {
        console.log('signOutUser has failed: ', error)
    })
  }

  watch(() => props.showMenu, (newVal, oldVal) => {
    console.log('showMenu: ', props.showMenu)
    console.log("User is logged in: ", newVal, oldVal)
    if (newVal !== oldVal) show_menu.value = newVal;
    console.log("show_menu: ", show_menu.value)
  })

 </script>

 <style scoped>
  ion-fab-button::part(native){
    background-color: #994d4e;
  }
  
  ion-fab{
    top: -13%;
  }
</style>