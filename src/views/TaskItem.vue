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
          creator:'',
          deadline: '',
          description: '',
          id: '',
          done: ''
        }
      } 
    },

    data() {
        return {
          detailsPageURL: null,
          done: ''
        };
    },


    mounted(){
      this.detailsPageURL = '/tasks/' + this.task.id;
    }

  });
  
</script>

<template>
  <ion-item detail="true" :href="detailsPageURL"  class="box">
    <ion-label>
      <h3 :class="{'text-color' : task.done}"> {{ this.task.title }} </h3>
      <p :class="{'text-color' : task.done}"> {{ this.task.description }} </p>
      <p :class="{'text-color' : task.done}"> {{ this.task.deadline }}</p>
    </ion-label>
  </ion-item>
    
</template>

<style>

  .box{
    --ion-item-background: #fae6dc;    
  }

  h3, p{
    --color:#191514;
  }

  .text-color {
    text-decoration: line-through;
  }

  
</style>
