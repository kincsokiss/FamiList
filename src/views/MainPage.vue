<template>
  <main class="dimensions">
    <CalendarItem/>
    <ToDoList/>
  </main>  
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

<style lang="scss" scoped>
  ion-toolbar {
    --opacity: 0.5;
  }

  .link_color {
    color: white;
  }

  .dimensions {
    width: 1404px;
    height: 9999px;
    flex: 1, 1 0;
    padding: 2rem;

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }


</style>
