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
          deadline: '',
          id: ''
        }
      } 
    },

    data() {
        return {
          detailsPageURL: null,
        };
    },

    mounted(){
      this.detailsPageURL = '/tasks/' + this.task.id;
      console.log(this.detailsPageURL);
    }

  });
  
</script>

<template>
  <ion-item detail="true" :href="detailsPageURL">
    <ion-label>
      <!-- <h3 class="color-light"> {{ detailsPageURL }} </h3> -->
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
