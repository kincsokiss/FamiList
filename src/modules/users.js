import firebaseDb from "./firebase"

class UsersModule {
  constructor() {
  //  this.getUsers();\
  //this.deleteUser('ABQFbm6JnlQx1eDSeBJh');
  // this.addUser('Kati', 17, 'Child', '07453468768');
  // this.updateUser('UlWHuHmaDgc2R0oTeFo0','Hanuka', 5, 'kiskocsag', '0776154686');
  // this.searchUserByID('UlWHuHmaDgc2R0oTeFo0');
  }
  async addUser(name, age, rank, phoneNumber, id) {
      try {
        const userId = await firebaseDb.storeDoc('Users',{
          age: age,
          name: name,
          rank: rank,
          phoneNumber: phoneNumber,
          uid: id
        });

        console.log(userId);
      } catch (error) {
        console.log('storeUser has failed: ', error)
      }
  }

  async updateUser(documentID, user) {
    try {
      await firebaseDb.editDoc('Users', documentID, {
        age: user.age,
        name: user.name,
        rank: user.rank,
        phoneNumber: user.phoneNumber
      });
      console.log('User updated');
    } catch (error) {
      console.log('updateUser has failed: ', error)
    }
  }  

  deleteUser(dataId){
    firebaseDb.destroyDoc('Users', dataId);
  }

  getUsers(){
    const Users = firebaseDb.getDocs('Users');

    console.log('Users= ', Users);
  }

  async searchUserByID(documentId){
    try{
      const datas = await firebaseDb.searchDocbyID('Users', documentId);
      return datas;
    } catch (error) {
      console.log('searchUserbyID has failed: ', error);
    }
  }

  async searchUserbyUID(uid){
    try{
      const datas = await firebaseDb.searchDocbyUID('Users', uid);
      return datas;
    } catch(error) {
      console.log('searchUserbyUID has failed: ', error);
    }
  }

}
const users = new UsersModule();

export default users;