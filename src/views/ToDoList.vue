<script>
  import { IonItem, IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import TaskItem from './TaskItem.vue';

  export default defineComponent({
    components: { IonItem, IonList, TaskItem} 
}
  );
</script>

<template>
  <ion-content>
    <ion-list>
      <ion-item><TaskItem/></ion-item>
      <ion-item><TaskItem/></ion-item>
      <ion-item><TaskItem/></ion-item>
    </ion-list>
  </ion-content>
</template>
