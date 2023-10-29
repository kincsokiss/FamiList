<template>
    <ion-grid>
        <ion-row>
            <ion-col></ion-col>
            <ion-col size="auto"><h1>This task does not exist!</h1></ion-col>
            <ion-col></ion-col>
        </ion-row>
        <ion-row>
            <ion-col></ion-col>
            <ion-col> <ion-button @click="ReturnToMainPage">Return to Main Page</ion-button></ion-col>
            <ion-col></ion-col>
        </ion-row>
    </ion-grid>
    
   
</template>

<script>
import { IonButton } from '@ionic/vue';

    export default({
        name: 'TaskNonexistent',

        components: {
            IonButton
        },

        methods: {
            ReturnToMainPage() {
                this.$router.push('/main-page');
            }
        }
    });

</script>

<style lang="scss" scoped>
    h1 {
        color: black;
    }
</style>
