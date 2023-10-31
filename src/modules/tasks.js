import firebaseDb from "./firebase"
class TasksModule {
  constructor() {
  // this.getTasks();
  // this.deleteTask('ENeKQeOJSADOWzIhIo6W');
  // this.addTask('title', 'desc', '29 Jul 2023', 'Reka', false, 'vlm', 'Gabi');
  // this.updateTask('lAOm9ACmQ4TMi0xv9E2Q', 'tit', 'desc', '10 Jul 2023', 'Reka', true, 'valamike', 'Gabi');
  // this.searchTaskByID('rT89H5JF5rn4PloGiDzW');
  }
  async addTask(title, description, deadline, responsible, repeatable, attachments, creator, done) {
      try {
        const taskId = await firebaseDb.storeDoc('Tasks',{
          title: title,
          description:  description,
          deadline: deadline,
          responsible: responsible,
          repeatable: repeatable,
          attachments: attachments,
          creator: creator,
          done: done,
        });

        console.log(taskId);
      } catch (error) {
        console.log('storeTask has failed: ', error)
      }
  }

  async updateTask(documentID, title, description, deadline, responsible, repeatable, attachments, creator, done) {
    try {
      
      await firebaseDb.editDoc('Tasks', documentID, {
        title:  title,
        description: description,
        deadline: deadline,
        responsible: responsible,
        repeatable: repeatable,
        attachments: attachments,
        creator: creator,
        done: done
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
      return datas;
    } catch (error) {
      console.log('searchTaskbyID has failed: ', error);
      return error;
    }
  }
  
  async searchTaskByDeadline(documentDeadline){
    try{
      const datas = await firebaseDb.searchDocbyDeadline('Tasks', documentDeadline);
      console.log(datas);
      return datas;
    } catch (error) {
      console.log('searchTaskbyDeadline has failed: ', error);
    }
  }
  //where

}
const tasks = new TasksModule();

export default tasks;