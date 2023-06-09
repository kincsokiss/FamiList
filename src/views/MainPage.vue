<template>
  <ion-header>
    <ion-toolbar>
      <ion-title> Header </ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h1>To-Do List</h1>
    <ToDoList/>
  </ion-content>
  <ion-footer>
    <ion-toolbar>
      <ion-title> Footer </ion-title> alma
    </ion-toolbar>
  </ion-footer>
</template>

<script>
import ToDoList from './ToDoList.vue';

  export default({
    name: "MainPage",
    components: { ToDoList }
});
</script>

