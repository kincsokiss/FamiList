<template>
    <ion-card>
    
        <form>
            <nav>
                <router-link to="/">
                    <ion-icon :icon="closeCircle" class="position"></ion-icon>
                </router-link>
            </nav>
            <ion-checkbox @ionChange="isDone" :checked="task.done" v-model="task.done">Done</ion-checkbox>
            
            <ion-input
                :fill="isInputEditable" 
                label="Title" 
                v-bind:value="task.title" 
                v-on:ion-input="task.title = $event.target.value" 
                :readonly="!isEditMode"
            ></ion-input>
            
            <ion-input 
                :fill="isInputEditable" 
                label="Description" 
                v-bind:value="task.description"
                v-on:ion-input="task.description = $event.target.value"
                :readonly="!isEditMode"
            ></ion-input>
            
            <ion-input 
                :fill="isInputEditable" 
                label="Deadline" 
                v-bind:value="task.deadline"
                v-on:ion-input="task.deadline = $event.target.value"
                :readonly="!isEditMode"
            ></ion-input>
            
            <ion-input 
                :fill="isInputEditable" 
                label="Responsible" 
                v-bind:value="task.responsible"
                v-on:ion-input="task.responsible = $event.target.value"
                :readonly="!isEditMode"
            ></ion-input>
            
            <ion-input 
                :fill="isInputEditable" 
                label="Repeatable" 
                v-bind:value="task.repeatable"
                v-on:ion-input="task.repeatable = $event.target.value"
                :readonly="!isEditMode"
            ></ion-input>

            <ion-input 
                :fill="isInputEditable" 
                label="Attachment" 
                v-bind:value="task.attachments"
                v-on:ion-input="task.attachments = $event.target.value"
                :readonly="!isEditMode"
            ></ion-input>
            
            <ion-input 
                :fill="isInputEditable" 
                label="Creator" 
                v-bind:value="task.creator"
                v-on:ion-input="task.creator = $event.target.value"
                :readonly="!isEditMode"
            ></ion-input>  

            <ion-button @click="ClickButton" class="button">{{ buttonLabel }}</ion-button>
            <ion-button id="present-alert" class="button">Delete</ion-button>

            <ion-alert
                trigger="present-alert"
                sub-header="Important message"
                message="Are you sure you want to delete this task?"
                :buttons="alertButtons"
            ></ion-alert>
        </form>
    </ion-card>
</template>

<script setup>
    import tasks from '../modules/tasks';
    import { closeCircle } from 'ionicons/icons';
    import { IonCheckbox, IonCard, IonInput, IonIcon, toastController, IonButton, IonAlert } from '@ionic/vue';
    import { computed, onMounted, ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    const task = ref({
        title: '',
        description: '',
        deadline: '',
        responsible: '',
        repeatable: '' ,
        attachments: '',
        creator: '',
        done: ''       
    })

    const isEditMode = ref(false);
    const router = useRouter();
    const route = useRoute();
    const taskId = ref(null);

    onMounted( async () => {
        try{
            taskId.value = route.params.taskid
            task.value = await tasks.searchTaskByID(taskId.value);
        } catch(error) {
            router.push('/err-nonexistent-task');
        }
        
    })

    const buttonLabel = computed(() => {
        return isEditMode.value ? 'Save' : 'Edit'
    })

    const isInputEditable = computed(() => {
        return isEditMode.value ? 'solid' : 'outline'
    })

    const alertButtons = [
        {
            text: 'Cancel',
            role: 'cancel'
        },
        {
            text: 'Delete',
            role: 'destructive',
            handler: () => {
                deleteTask()
            }
        }
    ];

    async function presentToast(position = 'middle'){
        const toast = await toastController.create({
            message: 'Task has been saved',
            duration: 1500,
            position: position
        });

        await toast.present();
    }

    function isDone(event) {
        task.value.done = event.detail.checked;
        tasks.updateTask(taskId.value, task.value.title, task.value.description, task.value.deadline, task.value.deadline, task.value.responsible, task.value.attachments, task.value.creator, task.value.done);
    }

    function saveTask() {
        if(isEditMode.value) {
            tasks.updateTask(taskId.value, task.value.title, task.value.description, task.value.deadline, task.value.deadline, task.value.responsible, task.value.attachments, task.value.creator, task.value.done);
            changeEditMode();
            presentToast();
        }
    }

    function changeEditMode() {
        isEditMode.value = !isEditMode.value;
    }

    function ClickButton() {
        isEditMode.value ? saveTask() : changeEditMode()
    }

    function deleteTask() {
        tasks.deleteTask(taskId.value)
        resetForm();
        router.push('/');
    }

    function resetForm() {
        task.value = {
            title: '',
            description: '',
            deadline: '',
            id: '',
            responsible: '',
            attachments: '',
            creator: '',
            repeatable: '' ,
            done: ''
        }
    }
</script>

<style lang="scss" scoped>

    ion-input{
        color: #191514;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
        margin: 1%;
        font-size: 13pt;
    
    }



    ion-card {
        text-align: center;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
        padding: 2%;
        margin-top: 5rem;
        ion-checkbox {
            margin-bottom: 1%;
        }

        ion-input {
            margin-bottom: 1%;
        }
    }

    .input-fill-solid.sc-ion-input-md-h {
        --background: #05040400;
        --border-color: #c56364;        
    }

    .input-fill-solid.has-focus.sc-ion-input-md-h {
        --background: #00000000;
    }

    .is-done {
        text-decoration: line-through;
    }

    ion-col {
        position: absolute;
        text-align: center;
        background-color: #f7d6c5;
    }

    .position {
        display: flex;
        justify-content: end;
        margin-bottom: 0.5rem;
        position: relative;
        font-size: 1.5rem; 
        top: 20pt;
        
        &:hover {
            color: #312b27;       
        }
    }

    .button {
        color: #f7d6c5;
        text-decoration: none;
        background-color: #312b27;
        
        border-radius: 10px;
        font-family: 'Poppins', sans-serif;
        &:hover {
            background-color: #191514;
        }
    }

    .is-input-visible {
        .color{
            background-color: #355155;
        }
        
    }

    .size {
        height: 100%;
    }

</style>