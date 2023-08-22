<script>
  import { IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import TaskItem from './TaskItem.vue';
  import tasks from '../modules/tasks';
  import { IonContent } from '@ionic/vue';
  import { addCircleOutline } from 'ionicons/icons';


  export default defineComponent ({
    name: "ToDoList",
    components: { 
      IonList,
      TaskItem,
      IonContent
    },

    data() {
        return {
          tasks: null,
        };
    },

    async mounted() {
      this.tasks = await tasks.getTasks();
    },

    setup() {
      return { addCircleOutline };
    },

  });

  
</script>

<template>
  <h1>To-Do List</h1>
  <span class="text_">Create</span>
  <router-link to="/CreateTask" class="pos">
          
    <ion-icon :icon="addCircleOutline" class="logo_"></ion-icon>
  </router-link>
      
  <ion-content class="ion-padding to-do-list">
    <ion-list>
      <TaskItem v-for="task in tasks" :key="task.id" :task="task"/> 
    </ion-list>
  </ion-content>
</template>

<style scoped>
  .to-do-list {
    height: 400px;
  }

  .logo_ {
    margin-bottom: 0.5rem;
    font-size: 2rem;
    color: #f1f5f9;
    width: 2rem;

    &:hover {
      color: #4ade80;
    }
  }

  .text_ {
    color: #f1f5f9;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    display: flex;
    justify-content: end;
    position: relative;
    top: -3rem;
  }

  .pos {
    display: flex;
    justify-content: end;
    margin-bottom: 0.5rem;
    position: relative;
    top: -3rem;
  }

  ion-content {
    top: -4.1rem;
  }
</style>