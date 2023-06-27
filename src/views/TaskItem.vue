<script>
  import { IonItem, IonLabel } from '@ionic/vue';
  import { caretForwardOutline } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel },
    props: ['taskItem'],
    setup(props) {
      console.log(props.taskItem)
      return {
        caretForwardOutline,
      };
    },
  });
  
</script>

<template>
  <ion-item detail="true">
    <ion-label>
      <h3> {{ props.taskItem.title }} </h3>
      <p> {{ props.taskItem.desc }} </p>
      <p> {{ props.taskItem.creationDate }}</p>
      <p> {{ props.taskItem.deadline }}</p>
    </ion-label>
  </ion-item>
</template>
