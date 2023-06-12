<template>
  <ion-header>
    <ion-toolbar>
      <ion-title> Header </ion-title>
    </ion-toolbar>
  </ion-header>
  <MenuVue/>
  <ion-content class="ion-padding">
  </ion-content>
  <ion-footer>
    <ion-toolbar>
      <ion-title> Footer </ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script>
  import MenuVue from "./Menu.vue";
  
  export default({
    name:'MainPage',
    components: {
    MenuVue
},
  });


</script>

