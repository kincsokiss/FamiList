<template>
    <ion-grid>
        <ion-row>
            <ion-col>
                <div>
                    <form ref="form" @submit="formSubmit" class="back_color">
                        <h2>Create a new task!</h2>

                        <nav>
                            <router-link to="/main-page">
                                <ion-icon :icon="closeCircle" class="position"></ion-icon>
                            </router-link>
                        </nav>

                        <ion-input label="Title" placeholder="Enter the title" ref="title" required="required"></ion-input>
                        <ion-input label="Description" placeholder="Enter the description" ref="desc"></ion-input>
                        <ion-input label="Deadline" type="date" placeholder="Set the deadline" ref="deadline"></ion-input>
                        <ion-input label="Responsibles" placeholder="Who should do it?" ref="resp"></ion-input>
                        <ion-input label="Repeatable" ref="repeat" placeholder="yes/no"></ion-input>
                        <ion-input label="Attachment" ref="att"></ion-input>
                        <ion-input label="Creator" placeholder="Who created it?" ref="creator"></ion-input>    
                        <ion-button type="submit">{{ buttonLabel }}</ion-button>
                    </form>
                </div>
            </ion-col>
        </ion-row>
    </ion-grid>
    
</template>

<script>
    import { defineComponent } from 'vue';
    import tasks from '../modules/tasks';
    import { closeCircle } from 'ionicons/icons';

    export default defineComponent({
    name:'CreateTask',

    data() {
        return {
            title: '',
            desc: '',
            deadline: '',
            resp: '',
            repeat: '',
            att: '',
            creator: '',
            closeCircle,
            isTaskUpdating: false,
            task: {
                default: {
                    title: '',
                    description: '',
                    deadline: '',
                    id: '',
                    responsible: '',
                    attachments: '',
                    creator: ''
                }
            }
        };
    },

    computed: {

        buttonLabel(){
            return this.isTaskUpdating ? 'Update' : 'Create'
        }
    },

    methods: {
        formSubmit(e) {
            e.preventDefault();
            const title = this.$refs.title.value;
            const desc = this.$refs.desc.value;
            const deadline = this.$refs.deadline.value;
            const resp = this.$refs.resp.value;
            const repeat = this.$refs.repeat.value;
            const att = this.$refs.att.value;
            const creator = this.$refs.creator.value;

            if(!this.isTaskUpdating){
                tasks.addTask(title, desc, deadline, resp, repeat, att, creator);
            }
            else{
                tasks.updateTask(this.task.id, title, desc, deadline, resp, repeat, att, creator)
            }
            this.$refs.form.reset();
        },
    },
    
});

</script>

<style scoped> 
    .back_color {
        background-color: #1B2F33;
    }

    .position {
        display: flex;
        justify-content: end;
        margin-bottom: 0.5rem;
        position: relative;
        font-size: 1.5rem;
        color: #f1f5f9;
        top: -3rem;
        
        &:hover {
            color: #4ade80;       
        }
    }

    ion-col {
        position: absolute;
        text-align: center;
    }

    h2 {
        font-size: 30pt;
        position: relative;
    }

    ion-button {
        --background: rgb(64, 130, 161);
        --border-radius: 10px;
    }

</style>