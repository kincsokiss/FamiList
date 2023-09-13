
<template>
  <h1>To-Do List</h1>
  <router-link to="/create-task" class="pos">
    <ion-icon :icon="addCircleOutline" class="logo_"></ion-icon>
  </router-link>
  
  <ion-content class="box">
      <ion-list class="ion-list">
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
    },
    

    setup() {
      return { addCircleOutline };
    },

  });

  
</script>


<style scoped>

  
  .ion-list{
    font-family: 'Poppins', sans-serif;
  }

  h1{
    color: #191514;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
  }

  .logo_ {
    margin-bottom: 0.5rem;
    font-size: 2rem;
    color:#191514;
    width: 2rem;

    &:hover {
      color: #312b27;
    }
  }

  .box{
    
        background-color: #fae6dc;
        color: #191514;
        font-family: 'Poppins', sans-serif;
      
    
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