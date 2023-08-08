import firebaseDb from "./firebase"

class TasksModule {
  constructor() {
  // this.getTasks();
  // this.deleteTask('Pcx9IxkNrNvUQG0H8dC7');
  // this.addTask('title', 'desc', '29 Jul 2023', 'Reka', false, 'vlm', 'Gabi');
  // this.updateTask('lAOm9ACmQ4TMi0xv9E2Q', 'tit', 'desc', '10 Jul 2023', 'Reka', true, 'valamike', 'Gabi');
  // this.searchTaskByID('rT89H5JF5rn4PloGiDzW');
  }
  async addTask(title, discription, deadline, responsebles, repeatable, attachments, creator) {
      try {
        const taskId = await firebaseDb.storeDoc('Tasks',{
          Title: title,
          Discription:  discription,
          Deadline: deadline,
          Responsebles: responsebles,
          Repeatable: repeatable,
          Attachments: attachments,
          Creator: creator,
        });

        console.log(taskId);
      } catch (error) {
        console.log('storeTask has failed: ', error)
      }
  }

  async updateTask(documentID, newTitle, newDiscription, newDeadline, newResponsebles, newRepeatable, newAttachments, newCreator) {
    try {
      await firebaseDb.editDoc('Tasks', documentID, {
        Title:  newTitle,
        Discription: newDiscription,
        Deadline: newDeadline,
        Responsables: newResponsebles,
        Repeatable: newRepeatable,
        Attachments: newAttachments,
        Creator: newCreator
      });
      console.log('Task updated');
    } catch (error) {
      console.log('updateTask has failed: ', error)
    }
  }  

  deleteTask(dataId){
    firebaseDb.destroyDoc('Tasks', dataId);
  }

  async getTasks(){
    //const tasks = await firebaseDb.getDocs('Tasks');
    return firebaseDb.getDocs('Tasks');
    
   // return tasks;
  }

  async searchTaskByID(documentId){
    try{
      const datas = await firebaseDb.searchDocbyID('Tasks', documentId);
      console.log(datas);
    } catch (error) {
      console.log('searchTaskbyID has failed: ', error);
    }
  }
  

}
const tasks = new TasksModule();

export default tasks;