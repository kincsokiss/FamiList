<script>
  import { IonItem, IonLabel } from '@ionic/vue';
  import { caretForwardOutline } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: "TaskItem",
    components: { IonItem, IonLabel },

    props: {
      taskItem: { default: {title: ''} } 
    },

    // data() {
    //   return {
    //     task: {}
    //   };
    // },

    // watch: {
    //   taskItem: {
    //     handle(value) {
    //       this.task = value;
    //     },
    //     deep: true
    //   }
    // },

    setup() {
      // this.task = props.taskItem;

      return {
        caretForwardOutline,
      };
    },
  });
  
</script>

<template>
  <ion-item detail="true">
    <ion-label>
      <h3 class="color-light"> {{ props?.taskItem.title }} </h3>
      <p class="color-light">mindegy</p>
      <!-- <p> {{ props.taskItem.description }} </p>
      <p> {{ props.taskItem.deadline }}</p> -->
    </ion-label>
  </ion-item>
</template>

<style>
  .color-light {
    color:white;
  }
</style>
