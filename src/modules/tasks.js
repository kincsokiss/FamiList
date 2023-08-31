import firebaseDb from "./firebase"

class TasksModule {
  constructor() {
  // this.getTasks();
  // this.deleteTask('ENeKQeOJSADOWzIhIo6W');
  // this.addTask('title', 'desc', '29 Jul 2023', 'Reka', false, 'vlm', 'Gabi');
  // this.updateTask('lAOm9ACmQ4TMi0xv9E2Q', 'tit', 'desc', '10 Jul 2023', 'Reka', true, 'valamike', 'Gabi');
  // this.searchTaskByID('rT89H5JF5rn4PloGiDzW');
  }
  async addTask(title, description, deadline, responsibles, repeatable, attachments, creator) {
      try {
        const taskId = await firebaseDb.storeDoc('Tasks',{
          title: title,
          description:  description,
          deadline: deadline,
          responsibles: responsibles,
          repeatable: repeatable,
          attachments: attachments,
          creator: creator,
        });

        console.log(taskId);
      } catch (error) {
        console.log('storeTask has failed: ', error)
      }
  }

  async updateTask(documentID, task) {
    try {
      await firebaseDb.editDoc('Tasks', documentID, {
        title:  task.title,
        description: task.description,
        deadline: task.deadline,
        responsibles: task.responsibles,
        repeatable: task.repeatable,
        attachments: task.attachments,
        creator: task.creator
      });
      console.log('Task updated');
    } catch (error) {
      console.log('updateTask has failed: ', error)
    }
  }  

  deleteTask(dataId){
    firebaseDb.destroyDoc('Tasks', dataId);
    console.log('sikeres');
  }

  async getTasks(){
    // const tasks = await firebaseDb.getDocs('Tasks');
    // return tasks;
    return firebaseDb.getDocs('Tasks');
   // return tasks;
  }

  async searchTaskByID(documentId){
    try{
      const datas = await firebaseDb.searchDocbyID('Tasks', documentId);
      console.log(datas);
      return datas;
    } catch (error) {
      console.log('searchTaskbyID has failed: ', error);
    }
  }
  

}
const tasks = new TasksModule();

export default tasks;