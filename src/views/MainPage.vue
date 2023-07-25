<template>
  <CalendarItem/>
  <ToDoList/>
</template>

<script>
import ToDoList from './ToDoList.vue';
import CalendarItem from './Calendar.vue';
  
  export default({
    name: "MainPage",
    components: {
    ToDoList,
    CalendarItem
},
  });

</script>

<style scoped>
  ion-toolbar {
    --opacity: 0.5;
  }

</style>