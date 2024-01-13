<template>
    <ion-row>
      <ion-col>
        <ion-card >
         <ion-datetime presentation="date" :highlighted-dates="taskDeadlines" class="full-width" ></ion-datetime>
        </ion-card>
      </ion-col>
    </ion-row>
  
</template>

<script setup>
  import { IonDatetime, IonCard, IonCol, IonRow} from '@ionic/vue';
  import tasks from '../modules/tasks';
  import { ref, onMounted } from 'vue';

  const taskDeadlines = ref([]);
  const task = ref([]);

  async function getTask() {
    task.value = await tasks.getTasks();
    taskDeadlines.value = task.value.map(item=>{
      return {date:item.deadline, textColor: "red"}
    });
  }

  onMounted(() => {
    getTask();
  })

</script>

<style scoped>
  .full-width {
    max-width: 100%;
    --ion-text-color:#191514;
    color: #191514;
    font-family: 'Poppins', sans-serif;
    --wheel-fade-background-rgb:#191514;
   
  }
  .full-width  ion-label {
      font-size: 13pt;
    }
    
  ion-datetime::part(wheel-item active) {
    font-family: 'Poppins', sans-serif;
  }
  
  h1{
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
  }

  ion-row{
    margin-top: 3rem;
  }

</style>