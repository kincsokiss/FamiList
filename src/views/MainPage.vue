<template>
  <ion-header>
    <ion-toolbar>
      <ion-title> Header </ion-title>
    </ion-toolbar>
  </ion-header>
  <MenuVue/>
  <ion-content class="ion-padding">
    <h1>Calendar</h1>
    <Calendar/>
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
  import ToDoList from './ToDoList.vue';
  import MenuVue from "./Menu.vue";
  import Calendar from './Calendar.vue';
  
  export default({
    name: "MainPage",
    components: { 
      ToDoList,
      Calendar,
      MenuVue 
      },
  });

</script>

