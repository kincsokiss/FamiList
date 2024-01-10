<template>
  <ion-item detail="true" :href="detailsPageURL"  class="box">
    <ion-label>
      <p :class="[{'text-linethrough' : props.task.done}, 'bold']"> {{ props.task.title }} </p>
      <p> {{ props.task.description }} </p>
      <p> {{ props.task.deadline }}</p>
    </ion-label>
  </ion-item>
    
</template>

<script setup>
  import { IonItem, IonLabel } from '@ionic/vue';
  import { ref } from 'vue';

  const props = defineProps({
    task: {
        title: '',
        creator:'',
        deadline: '',
        description: '',
        id: '',
        done: ''
      }
  });

 const detailsPageURL = ref('/tasks/' + props.task.id);
  
</script>

<style>

  p{
    font-size: 13px !important;
    color: #191514 !important;
  }

  .text-linethrough {
    text-decoration: line-through;

  }
  
  .bold {
    font-weight: bold;
    font-size: 15px !important;
  }
</style>
