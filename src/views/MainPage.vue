<template>
  <HeaderVue/>
  <MenuVue/>
  <ion-content class="ion-padding">
    <h1>Calendar</h1>
    <Calendar/>
    <h1>To-Do List</h1>
    <ToDoList/>
  </ion-content>
  <FooterVue/>
</template>

<script>
  import ToDoList from './ToDoList.vue';
  import MenuItem from "./Menu.vue";
  import Calendar from './Calendar.vue';
  import HeaderVue from './Header.vue';
  import FooterVue from './Footer.vue';
  
  export default({
    name: "MainPage",
    components: { 
      ToDoList,
      Calendar,
      MenuVue,
      HeaderVue,
      FooterVue
      },
  });

</script>

<style scoped>
  ion-toolbar {
    --opacity: 0.5;
  }
</style>