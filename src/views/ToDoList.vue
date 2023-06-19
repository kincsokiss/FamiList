<script>
  import { IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import TaskItem from './TaskItem.vue';

  export default defineComponent({
    components: { IonList, TaskItem } 
    }
  );

  const taskItem = [{ 
    title: 'Task Title',
    desc: 'Description',
    creationDate: 'Date',
    deadline: 'Deadline'
  }];
  // az ion-listre kell a v-for, a taskitemnek atadni egy elemet, propot hogy adunkk at
  // taskitem.vuet megkell updatelni hogy mutassa ki a tasklistanak egy elemet
  console.log(taskItem);
  
</script>

<template>
  <ion-content>
    <ion-list>
        <TaskItem v-for="taskItem in taskItems" :key="taskItem.title"
          {{ taskItem.title }},{{taskItem.desc}},{{ taskItem.creationDate}},{{ taskItem.deadline}}
        /> 
    </ion-list>
  </ion-content>
</template>
