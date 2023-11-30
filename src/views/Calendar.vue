<template>
    <ion-row>
      <ion-col>
        <ion-card>
         <ion-datetime presentation="date" :highlighted-dates="taskDeadlines" class="full-width"></ion-datetime>
        </ion-card>
      </ion-col>
    </ion-row>
  
</template>

<script>
  import { IonDatetime } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import tasks from '../modules/tasks';

  export default defineComponent({
    name:'CalendarItem',
    components: { 
      IonDatetime
    },
    data(){
      return{
        taskDeadlines: [],
        tasks: []
      }
      
    },
    
    async mounted(){
      this.tasks = await tasks.getTasks();
      console.log(this.tasks);
      this.taskDeadlines = this.tasks.map(item=>{
        return {date:item.deadline,textColor: "red" }
      }); 
      
      console.log(this.taskDeadlines);
      
    }
  });
</script>

<style scoped>
  .full-width {
    max-width: 100%;
    background-color:#fae6dc;
    --ion-text-color:#191514;
    color: #191514;
    font-family: 'Poppins', sans-serif;
    --wheel-highlight-background: #f7d6c5;
    --wheel-fade-background-rgb:#191514;
   
  }
  .full-width  ion-label {
      font-size: 13pt;
    }
    
  ion-datetime::part(wheel-item active) {
    color: #c56364;
  }
  h1{
    color: #191514;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    

  }

  ion-row{
    margin-top: 3rem;
  }

</style>