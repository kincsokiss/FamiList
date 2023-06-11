<script>
  import { IonItem, IonLabel } from '@ionic/vue';
  import { caretForwardOutline } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel },
    setup() {
      return {
        caretForwardOutline,
      };
    },
  });
</script>
<template>
  <ion-item detail="true">
    <ion-label>
      <h3>Task Title</h3>
      <p>Task Description and Details</p>
    </ion-label>
  </ion-item>
</template>
