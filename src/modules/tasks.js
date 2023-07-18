import firebaseDb from "./firebase"

class TasksModule {
  constructor() {
  //  this.getUsers();\
  //this.deleteUser('ABQFbm6JnlQx1eDSeBJh');
  //this.addUser('Kati', 17, 'Child', '07453468768');
  this.updateTask('UlWHuHmaDgc2R0oTeFo0','Hankuka', 3, 'kiskocsag', '0776154686')
  this.searchTaskByID('UlWHuHmaDgc2R0oTeFo0');
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
        title:  newTitle,
        discription: newDiscription,
        deadline: newDeadline,
        responsables: newResponsebles,
        repeatable: newRepeatable,
        attachments: newAttachments,
        creator: newCreator
      });
      console.log('Task updated');
    } catch (error) {
      console.log('updateTask has failed: ', error)
    }
  }  

  deleteTask(dataId){
    firebaseDb.destroyDoc('Tasks', dataId);
  }

  getTask(){
    const Tasks = firebaseDb.getDocs('Tasks');

    console.log('Tasks= ', Tasks);
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