<template>
  <ion-content class="dimensions colored">
    <CalendarItem/>
    <ToDoList/>
  </ion-content>  
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

  .colored {
    background-color: rgb(72, 72, 72);
  }

  .dimensions {
    flex: 1, 1 0;
    padding: 2rem;
    display: flow-root;
    height: auto;

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }


</style>
