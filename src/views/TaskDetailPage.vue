<template>
    <ion-grid>
        <ion-row>
            <ion-col>
                <div>
                    <nav>
                        <router-link to="/main-page">
                            <ion-icon :icon="closeCircle" class="position"></ion-icon>
                        </router-link>
                    </nav>

                    <form ref="form">
                        <ion-input :fill="isInputEditable" label="Title" ref="tit" :value="task.title" :readonly="!isEditMode"></ion-input>
                        <ion-input :fill="isInputEditable" label="Description" ref="desc" :value="task.description" :readonly="!isEditMode"></ion-input>
                        <ion-input :fill="isInputEditable" label="Deadline" ref="dead" :value="task.deadline" :readonly="!isEditMode"></ion-input>
                        <ion-input :fill="isInputEditable" label="Responsibles" ref="resp" :value="task.responsibles" :readonly="!isEditMode"></ion-input>
                        <ion-input :fill="isInputEditable" label="Repeatable" ref="repeat" :value="task.repeatable" :readonly="!isEditMode"></ion-input>
                        <ion-input :fill="isInputEditable" label="Attachment" ref="att" :value="task.attachments" :readonly="!isEditMode"></ion-input>
                        <ion-input :fill="isInputEditable" label="Creator" ref="crea" :value="task.creator" :readonly="!isEditMode"></ion-input>  
                        <ion-button @click="onClickButton">{{ buttonLabel }}</ion-button>
                        <ion-button id="present-alert">Delete</ion-button>
                        <ion-alert
                            trigger="present-alert"
                            sub-header="Important message"
                            message="Are you sure you want to delete this task?"
                            :buttons="alertButtons"
                        ></ion-alert>
                    </form>
                </div>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script>
import tasks from '../modules/tasks';
import { IonButton, IonAlert } from '@ionic/vue';
import { toastController } from '@ionic/vue';
import { closeCircle } from 'ionicons/icons';

    export default({
        name:'TaskDetailPage',

        components: {
            IonButton,
            IonAlert
        },

        data() {
            return {
                task: {
                    default: {
                        title: '',
                        description: '',
                        deadline: '',
                        id: '',
                        responsible: '',
                        attachments: '',
                        creator: '',
                        repeatable: '' 
                    }           
                },
                closeCircle,
                isEditMode: false,
                tit: '',
                desc: '',
                dead: '',
                resp: '',
                repeat: '',
                att: '',
                crea: '',
                alertButtons: []
            };
        },
        

        computed:{
            taskId(){
                return this.$route.params.taskid
            },

            buttonLabel() {
                return this.isEditMode ? 'Save' : 'Edit'
            },

            isInputEditable() {
                return this.isEditMode ? 'solid' : 'outline'
            }
        },

        methods: {
            async presentToast(position = 'middle'){
                const toast = await toastController.create({
                    message: 'Task has been saved',
                    duration: 1500,
                    position: position
                });

                await toast.present();
            },

            saveTask() {
                if(this.isEditMode) {
                    this.task.title = this.$refs.tit.value;
                    this.task.description = this.$refs.desc.value;
                    this.task.deadline = this.$refs.dead.value;
                    this.task.responsibles = this.$refs.resp.value;
                    this.task.repeatable = this.$refs.repeat.value;
                    this.task.attachments = this.$refs.att.value;
                    this.task.creator = this.$refs.crea.value;
                    tasks.updateTask(this.taskId, this.task)
                }
                this.changeEditMode();
                this.presentToast();
            },

            changeEditMode() {
                this.isEditMode = !this.isEditMode;

            },

            onClickButton() {
                this.isEditMode ? this.saveTask() : this.changeEditMode()
            },

            deleteTask() {
                tasks.deleteTask(this.taskId)
                this.$refs.form.reset();
                this.$router.push('/main-page')
            },
            
        },

        async mounted(){
            this.task = await tasks.searchTaskByID(this.taskId);

             this.alertButtons = [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: () => {
                        this.deleteTask(this.task)
                    }
                }
            ];
        },
    });
</script>

<style scoped>
    .text{
        color: #191514;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
        margin-left: 5%;
        margin-right: 5%; 
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