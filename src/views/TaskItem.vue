<template>
  <ion-item detail="true" :href="detailsPageURL"  class="box">
    <ion-label>
      <p :class="{'text-color' : task.done}"> {{ this.task.title }} </p>
      <p :class="{'text-color' : task.done}"> {{ this.task.description }} </p>
      <p :class="{'text-color' : task.done}"> {{ this.task.deadline}}</p>
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
      // const date= this.$moment();
      //console.log (date);
    }

  });
  
</script>

<style scoped>

  .box{
    --ion-item-background: #fae6dc;  
  }

  p{
    color:#191514;
    font-size: 13pt;
  }

  .text-color {
    text-decoration: line-through;
    
  }

  
</style>
