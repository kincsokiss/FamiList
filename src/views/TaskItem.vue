<template>
  <ion-item detail="true" :href="detailsPageURL"  class="box">
    <ion-label>
      <p :class="{'text-color' : task.done}"> {{ this.task.title }} </p>
      <p :class="{'text-color' : task.done}"> {{ this.task.description }} </p>
      <p :class="{'text-color' : task.done}"> {{ this.formatDate(this.task.deadline)}}</p>
    </ion-label>
  </ion-item>
    
</template>

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
      //const date= new Date("2023-09");
      //console.log (date);
    },

    methods:{
      formatDate(date){
        //return new Date(date);
        return date;
      }
    }

  });
  
</script>

<style>

  .box{
    --ion-item-background: #fae6dc;    
  }

  h3, p{
    --color:#191514;
  }

  
</style>
