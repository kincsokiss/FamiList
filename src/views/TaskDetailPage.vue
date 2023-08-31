<template>
    <ion-grid>
        <ion-row>
            <ion-col>
                <div>
                    <nav>
                        <router-link to="/">
                            <ion-icon :icon="closeCircle" class="position"></ion-icon>
                        </router-link>
                    </nav>

                    <form ref="form">
                        <ion-input label="Title" ref="tit" :value="task.title" :readonly="isRead"></ion-input>
                        <ion-input label="Description" ref="desc" :value="task.description" :readonly="isRead"></ion-input>
                        <ion-input label="Deadline" ref="dead" :value="task.deadline" :readonly="isRead"></ion-input>
                        <ion-input label="Responsibles" ref="resp" :value="task.responsibles" :readonly="isRead"></ion-input>
                        <ion-input label="Repeatable" ref="repeat" :value="task.repeatable" :readonly="isRead"></ion-input>
                        <ion-input label="Attachment" ref="att" :value="task.attachments" :readonly="isRead"></ion-input>
                        <ion-input label="Creator" ref="crea" :value="task.creator" :readonly="isRead"></ion-input>  
                        <ion-button @click="isTaskReadOnly">{{ buttonLabel }}</ion-button>
                        <ion-button @click="deleteTask">Delete</ion-button>
                        <!-- <h1>creator: {{ task.creator }}</h1>
                        <h1>responsible:  {{ task.responsibles }} </h1>
                        <h1>description:  {{ task.description }} </h1>
                        <h1>attachment: {{ task.attachments }} </h1>
                        <h1>deadline:  {{ task.deadline }} </h1> -->
                    </form>
                </div>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script>
import tasks from '../modules/tasks';
import { IonButton } from '@ionic/vue';
import { closeCircle } from 'ionicons/icons';

    export default({
        name:'TaskDetailPage',

        components: {
            IonButton,
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
                isRead: true,
                tit: '',
                desc: '',
                dead: '',
                resp: '',
                repeat: '',
                att: '',
                crea: ''
            };
        },

        computed:{
            taskId(){
                return this.$route.params.taskid
            },

            buttonLabel() {
                return this.isRead ? 'Edit' : 'Save'
            }    
        },

        methods: {
            isTaskReadOnly() {
                if(!this.isRead) {
                    const newTitle = this.$refs.tit.value;
                    const newDesc = this.$refs.desc.value;
                    const newDead = this.$refs.dead.value;
                    const newResp = this.$refs.resp.value;
                    const newRepeat = this.$refs.repeat.value;
                    const newAtt = this.$refs.att.value;
                    const newCrea = this.$refs.crea.value;
                    tasks.updateTask(this.taskId, newTitle, newDesc, newDead, newResp, newRepeat, newAtt, newCrea)
                }
                return this.isRead = !this.isRead;
            },

            deleteTask() {
                tasks.deleteTask(this.taskId)
                this.$refs.form.reset();
            }
        },

        async mounted(){
            this.task = await tasks.searchTaskByID(this.taskId)
        }
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
</style>