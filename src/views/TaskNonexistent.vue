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

<script setup>
    import { IonButton } from '@ionic/vue';
    import { IonGrid, IonRow, IonCol } from '@ionic/vue';
    import { useRouter } from 'vue-router';
    const router = useRouter();

    function ReturnToMainPage() {
        router.push('/main-page');
    }
        
</script>

<style lang="scss" scoped>
    h1 {
        color: black;
    }
</style>
