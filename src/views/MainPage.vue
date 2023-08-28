<template>
    <ion-grid>
      <ion-row>
        <ion-col>
          <CalendarItem/>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ToDoList/>
        </ion-col>
      </ion-row>
    </ion-grid>
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
</style>
