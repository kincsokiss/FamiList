<template>
    <h1>Calendar</h1>
    <ion-row>
      <ion-col>
        <ion-datetime class="full-width"></ion-datetime>
      </ion-col>
    </ion-row>
    
</template>

<script>
  import { IonDatetime } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name:'CalendarItem',
    components: { IonDatetime },
  });
</script>

<style scoped>
  .full-width {
    max-width: 100%;
    background-color: #191514;
  }

  h1{
    color: #191514;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
  }

</style>