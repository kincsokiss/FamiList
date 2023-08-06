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
          tasks: [],
        };
    },

    async mounted() {
      this.tasks = await tasks.getTasks();
      console.log(this.tasks);
    },

  });

  
</script>

<template>
  <h1>To-Do List</h1>
  <ion-content class="ion-padding">
    <ion-list v-if="tasks.length > 0">
        <TaskItem v-for="task in tasks" :key="task.id" :task-item="task"/> 
    </ion-list>
  </ion-content>
</template>
