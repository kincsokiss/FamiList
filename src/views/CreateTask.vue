<template>
    <ion-card>
        <form ref="form" @submit="formSubmit" class="back_color">
            
            <nav>
                <router-link to="/main-page">
                    <ion-icon :icon="closeCircle" class="position"></ion-icon>
                </router-link>
            </nav>

            <h2>Create a new task!</h2>

            <ion-input class="text" label="Title" placeholder="Enter the title" v-model="title" required="required"></ion-input>
            <ion-input class="text" label="Description" placeholder="Enter the description" v-model="description"></ion-input>
            <ion-input class="text" label="Deadline" type="date" placeholder="Set the deadline" v-model="deadline"></ion-input>
            <ion-input class="text" label="Responsible" placeholder="Who should do it?" v-model="responsible"></ion-input>
            <ion-input class="text" label="Repeatable" v-model="repeat" placeholder="yes/no"></ion-input>
            <ion-input class="text" label="Attachment" v-model="attachment"></ion-input>
            <ion-input class="text" label="Creator" :value="user.name"></ion-input>

            <ion-button type="submit">Create</ion-button>
        </form>
    </ion-card>
</template>

<script setup>
    import { toastController, IonCard, IonInput, IonIcon, IonButton } from '@ionic/vue';
    import tasks from '../modules/tasks';
    import { closeCircle } from 'ionicons/icons';
    import users from '../modules/users';
    import { onMounted, ref } from 'vue';
    import firebaseDb from '../modules/firebase';
    import { getAuth } from 'firebase/auth';

    const title = ref('');
    const description = ref('');
    const deadline = ref('');
    const responsible = ref('');
    const repeat = ref('');
    const attachment = ref('');
    const done = ref(false);
    const authUser = ref('');
    const user = ref('');
    const auth = getAuth();
    
    onMounted(async() => {
        authUser.value = await firebaseDb.getAuthUser();
        fetchUserData();
    })

    async function presentToast(position = 'middle'){
            const toast = await toastController.create({
                message: 'Task has been created',
                duration: 1500,
                position: position
            });

            await toast.present();
    }

    async function fetchUserData() {
        try {
            let userId = await users.searchUserbyEmail(auth.currentUser.email);
            getUserData(userId);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    async function getUserData(userId) {
        try{
            user.value = await users.searchUserByID(userId);
        } catch (error) {
            console.log('Error in getUserData: ', error);
        }
    }

    function formSubmit(e) {
        e.preventDefault();
        tasks.addTask(title.value, description.value, deadline.value, responsible.value, repeat.value, attachment.value, user.value.name, done.value);
        presentToast();
        resetForm();
    }

    function resetForm() {
        title.value = "";
        description.value = "";
        deadline.value = "";
        responsible.value = "";
        repeat.value = "";
        attachment.value = "";
        done.value = "";
    }

</script>

<style scoped> 

    ion-card {
        text-align: center;
        background-color: #fae6dc;
        font-weight: bold;
        color: black;
        font-family: 'Poppins', sans-serif;
        margin-top: 5rem;
    }

    .text{
        color: #191514;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
        margin-left: 5%;
        font-size: 13pt;
    }
    
    h2{
        color: #191514;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;

    }
    ion-toast.custom-toast {
        --background: #f7d6c5;
        --box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.2);
        --color: #4b4a50;
    }


    .position {
        display: flex;
        justify-content: end;
        position: relative;
        top: 20pt;
        font-size: 1.5rem;
        
        &:hover {
            color: #312b27;       
        }
    }   

    ion-button {
        color: #f7d6c5;
        text-decoration: none;
        background-color: #312b27;
        
        border-radius: 10px;
        font-family: 'Poppins', sans-serif;
        &:hover {
            background-color: #191514;
        }
        margin-top: 8px;
    }

    form {
        padding: 8px;
    }

</style>