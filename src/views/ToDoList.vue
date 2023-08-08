<script>
  import { IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import TaskItem from './TaskItem.vue';
  import tasks from '../modules/tasks';


  export default defineComponent ({
    name: "ToDoList",
    components: { 
      IonList,
      TaskItem
    },

    data() {
        return {
          tasks: null,
        };
    },

    async mounted() {
      this.tasks = await tasks.getTasks();
    },

  });

  
</script>

<template>
  <h1>To-Do List</h1>
  <ion-content class="ion-padding to-do-list">
    <ion-list>
      <TaskItem v-for="task in tasks" :key="task.id" :task="task"/> 
    </ion-list>
  </ion-content>
</template>

<style>
  .to-do-list {
    height: 400px;
  }

</style>