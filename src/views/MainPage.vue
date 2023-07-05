<template>
  <HeaderVue/>
  <MenuItem/>
  <ion-content class="ion-padding">
    <h1>Calendar</h1>
    <Calendar/>
    <h1>Create User</h1>
    <UserItem/>
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
  import UserItem from './User.vue';
  
  export default({
    name: "MainPage",
    components: { 
      ToDoList,
      Calendar,
      MenuItem,
      HeaderVue,
      FooterVue,
      UserItem
      },
  });

</script>

<style scoped>
  ion-toolbar {
    --opacity: 0.5;
  }
</style>