<template>
  <ion-item detail="true" :href="detailsPageURL"  class="box">
    <ion-label>
      <p :class="{'text-color' : props.task.done}"> {{ props.task.title }} </p>
      <p :class="{'text-color' : props.task.done}"> {{ props.task.description }} </p>
      <p :class="{'text-color' : props.task.done}"> {{ formatDate(props.task.deadline)}}</p>
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

  // onMounted(() => {
  //   detailsPageURL = '/tasks/' + props.task.id;
  // })
  
  function formatDate(date){
    //return new Date(date);
    return date;
  }
  
</script>

<style>

  .box{
    --ion-item-background: #fae6dc; 
  }

  p{
    
    font-size: 13pt;
  }

  .text-color {
    text-decoration: line-through;
    --ion-text-color:#191514;
    color: #191514;
  }

  
</style>
