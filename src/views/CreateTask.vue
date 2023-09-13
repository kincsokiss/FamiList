<template>
    <ion-card>
        <form ref="form" @submit="formSubmit" class="back_color">
            

            <nav>
                <router-link to="/main-page">
                    <ion-icon :icon="closeCircle" class="position"></ion-icon>
                </router-link>
            </nav>

            <h2>Create a new task!</h2>

            <ion-input class="text" label="Title" placeholder="Enter the title" ref="title" required="required"></ion-input>
            <ion-input class="text" label="Description" placeholder="Enter the description" ref="desc"></ion-input>
            <ion-input class="text" label="Deadline" type="date" placeholder="Set the deadline" ref="deadline"></ion-input>
            <ion-input class="text" label="Responsibles" placeholder="Who should do it?" ref="resp"></ion-input>
            <ion-input class="text" label="Repeatable" ref="repeat" placeholder="yes/no"></ion-input>
            <ion-input class="text" label="Attachment" ref="att"></ion-input>
            <ion-input class="text" label="Creator" placeholder="Who created it?" ref="creator"></ion-input>    
            <ion-button type="submit">{{ buttonLabel }}</ion-button>
        </form>
    </ion-card>
</template>

<script>
    import { defineComponent } from 'vue';
    import { toastController } from '@ionic/vue';
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
            done: '',
            closeCircle,
            task: {
                default: {
                    title: '',
                    description: '',
                    deadline: '',
                    id: '',
                    responsible: '',
                    attachments: '',
                    creator: '',
                    done: ''
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
        async presentToast(position = 'middle'){
                const toast = await toastController.create({
                    message: 'Task has been created',
                    duration: 1500,
                    position: position
                });

                await toast.present();
        },

        formSubmit(e) {
            e.preventDefault();
            const title = this.$refs.title.value;
            const desc = this.$refs.desc.value;
            const deadline = this.$refs.deadline.value;
            const resp = this.$refs.resp.value;
            const repeat = this.$refs.repeat.value;
            const att = this.$refs.att.value;
            const creator = this.$refs.creator.value;
            const done = false;


            tasks.addTask(title, desc, deadline, resp, repeat, att, creator, done);
            this.presentToast();
            this.$refs.form.reset();
        },
    },
    
});

</script>

<style scoped> 

    ion-card {
        text-align: center;
        background-color: #fae6dc;
        font-weight: bold;
        color: black;
        font-family: 'Poppins', sans-serif;
    }

    .text{
        color: #191514;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
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
    }

</style>