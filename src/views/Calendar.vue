<template>
    <ion-row>
      <ion-col>
        <ion-datetime presentation="date" :highlighted-dates="taskDeadlines" class="full-width"></ion-datetime>
      </ion-col>
    </ion-row>
    
</template>

<script>
  import { IonDatetime } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name:'CalendarItem',
    components: { 
      IonDatetime
    },
    setup(){
      const taskDeadlines=[
        {
          date:'2023-09-18',
          textColor: "red"
        },
        {
          date:'2023-09-06',
          textColor: "red"
        }
      ]
    return {taskDeadlines};
    }
  });
</script>

<style scoped>
  .full-width {
    max-width: 100%;
    background-color: #f3bdaa;
    color:black;
  }

  h1{
    color: #191514;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
  }

</style>