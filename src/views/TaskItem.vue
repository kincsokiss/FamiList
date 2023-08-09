<script>
  import { IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: "TaskItem",
    components: { IonItem, IonLabel },

    props: {
      task: {
        default: {
          title: '',
          description: '',
          deadline: ''
        }
      } 
    },
  });
  
</script>

<template>
  <ion-item detail="true">
    <ion-label>
      <h3 class="color-light"> {{ this.task.title }} </h3>
      <p> {{ this.task.description }} </p>
      <p> {{ this.task.deadline }}</p>
    </ion-label>
  </ion-item>
</template>

<style>
  .color-light {
    color:white;
  }
</style>
