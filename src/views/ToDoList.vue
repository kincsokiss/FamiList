
<template>
  <h1>To-Do List</h1>
  <router-link to="/create-task" class="pos">
    <ion-icon :icon="addCircleOutline" class="logo_"></ion-icon>
  </router-link>
  
    <ion-card>
      <ion-list class="ion-list">
        <TaskItem v-for="task in taskList" :key="task.id" :task="task"/> 
      </ion-list>
    </ion-card>
</template>

<script setup>
  import TaskItem from './TaskItem.vue';
  import tasks from '../modules/tasks';
  import { IonCard, IonIcon } from '@ionic/vue';
  import { addCircleOutline } from 'ionicons/icons';
  import { IonList } from '@ionic/vue';
  import { ref, onMounted, watch } from 'vue';

  const props = defineProps([
    'isRefreshing',
  ]);

  const emit = defineEmits(['updateRefreshingState']);

  const deadlines = ref('');
  const taskList = ref([]);
 
  async function getTasks(){
    taskList.value = await tasks.getTasks();
        console.log(taskList.value);
      deadlines.value = taskList.value.map(item=>
        item.deadlines
      ); 
  }

  onMounted(() => {
    getTasks();
  }),

  watch(() => props.isRefreshing, async (newVal, oldVal) => {
      console.log(
        "Watch props.isRefreshing function called with args:",
        newVal,
        oldVal
      );
      if (newVal) {
        await getTasks();
        emit('updateRefreshingState', false);
      }
    });
  
</script>


<style scoped>

  
  .ion-list{
    font-family: 'Poppins', sans-serif;
    --ion-item-background: #fae6dc;
  }

  h1{
    color: #191514;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
  }

  .logo_ {
    font-size: 2rem;
    color:#191514;
    width: 2rem;

    &:hover {
      color: #312b27;
    }
  }

  ion-card {
    --ion-item-background: #fae6dc;
    --background: #fae6dc;
    top: -2.5rem;
  }

  .box{
    
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

</style>