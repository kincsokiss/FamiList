<template>
  <SideBar/>
    <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
    </ion-header>
  </template>
  
  <script>
  import SideBar from './SideBar.vue';
  export default({
   name:'HeaderVue',
   components: {
    SideBar
   }
  });
 </script>