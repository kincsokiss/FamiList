<template>
  <SideBar/>
    <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button v-if="isVisible"></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
    </ion-header>
  </template>
  
  <script>
  import SideBar from './SideBar.vue';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';

  export default({
   name:'HeaderVue',
   components: {
    SideBar
   },

   data() {
      return{
        isVisible: false,
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
    }

  });
 </script>

 <style scoped>
  ion-toolbar {
    --background: #c5636578;
  }
</style>