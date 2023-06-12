<template>
  <ion-header>
    <ion-toolbar>
      <ion-title> Header </ion-title>
    </ion-toolbar>
  </ion-header>
  <MenuVue/>
  <ion-content class="ion-padding">
    <h1>To-Do List</h1>
    <ToDoList/>
  </ion-content>
  <ion-footer>
    <ion-toolbar>
      <ion-title> Footer </ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script>
  import MenuVue from "./Menu.vue";
  
import ToDoList from './ToDoList.vue';

  export default({
    name:'MainPage',
    components: {
    MenuVue,
    ToDoList
  }
})

</script>

