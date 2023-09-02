
<template>
  <h1>To-Do List</h1>
  <router-link to="/create-task" class="pos">
    <ion-icon :icon="addCircleOutline" class="logo_"></ion-icon>
  </router-link>
      
  <ion-content>
    <ion-list>
        <TaskItem v-for="task in tasks" :key="task.id" :task="task"/> 
    </ion-list>
  </ion-content>
</template>

<script>
  import { defineComponent } from 'vue';
  import TaskItem from './TaskItem.vue';
  import tasks from '../modules/tasks';
  import { IonContent } from '@ionic/vue';
  import { addCircleOutline } from 'ionicons/icons';
  import { IonList,  } from '@ionic/vue';


  export default defineComponent ({
    name: "ToDoList",
    components: { 
      IonList,
      TaskItem,
      IonContent,
    },

    data() {
        return {
          tasks: null,
        };
    },

    async mounted() {
      this.tasks = await tasks.getTasks();
      console.log(this.tasks);
    },
    

    setup() {
      return { addCircleOutline };
    },

  });

  
</script>


<style scoped>

  .logo_ {
    margin-bottom: 0.5rem;
    font-size: 2rem;
    color: #f1f5f9;
    width: 2rem;

    &:hover {
      color: #4ade80;
    }
  }

  .pos {
    display: flex;
    justify-content: end;
    margin-bottom: 0.5rem;
    position: relative;
    top: -3rem;
  }

  ion-content {
    top: -2.5rem;
    max-width: 100%;
    height: 100%;
  }
</style>