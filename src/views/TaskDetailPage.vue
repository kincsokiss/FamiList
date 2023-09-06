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
    ion-col {
        position: absolute;
        text-align: center;
        background-color: #1B2F33;
    }

    .position {
        display: flex;
        justify-content: end;
        margin-bottom: 0.5rem;
        position: relative;
        font-size: 1.5rem;
        color: #f1f5f9;
        
        &:hover {
            color: #4ade80;       
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