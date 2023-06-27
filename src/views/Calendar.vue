<template>
    <ion-datetime class="ion-padding"></ion-datetime>
</template>

<script>
  import { IonDatetime } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name:'CalendarItem',
    components: { IonDatetime },
  });
</script>