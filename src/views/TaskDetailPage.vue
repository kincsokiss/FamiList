<template>
    <div>
        <h1>{{ task.title }}</h1>
        <hr>
        <h1>creator: {{ task.creator }}</h1>
        <h1>responsible: <b> {{ task.responsibles }} </b></h1>
        <h1>description: <i> {{ task.description }} </i></h1>
        <h1>attachment: {{ task.attachments }} </h1>
        <h1>deadline: <i> {{ task.deadline }} </i></h1>
    </div>
</template>

<script>
import tasks from '../modules/tasks';

    export default({
    name:'TaskDetailPage',

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
                creator: ''
            }           
          }
        };
    },

    computed:{
        taskId(){
            return this.$route.params.taskid
        },

    },

    async mounted(){
        this.task = await tasks.searchTaskByID(this.taskId)
        console.log(this.task);
    }
    });
</script>