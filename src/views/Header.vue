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
  
  <script>
  import SideBar from './SideBar.vue';
  import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
  import { IonFab, IonFabButton, IonFabList, IonHeader, IonIcon } from '@ionic/vue';
  import { personCircleOutline, settingsOutline, logOutOutline } from 'ionicons/icons' 

  export default({
   name:'HeaderVue',
   components: {
    SideBar,
    IonFab,
    IonFabButton,
    IonHeader,
    IonFabList,
    IonIcon
   },

   data() {
      return{
        isVisible: false,
        personCircleOutline,
        settingsOutline,
        logOutOutline,
      }
    },

    created() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if(user){
          this.isVisible = true;
        } else {
          this.isVisible = false;
        }
      })
    },

    methods:{
      goToUserSettings(){
        this.$router.push('/user-detail-page')
      },

      signOutUser(){
        const auth = getAuth();
        signOut(auth).then(() => {
            this.$router.push('/')
        }).catch((error) => {
            console.log('signOutUser has failed: ', error)
        })
      },
    },

  });
 </script>

 <style scoped>
  ion-fab-button::part(native){
    background-color: #994d4e;
  }
  
  ion-fab{
    top: -15%;
  }
</style>