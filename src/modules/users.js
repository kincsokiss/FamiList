import firebaseDb from "./firebase"

class UsersModule {
  constructor() {
  //  this.getUsers();\
  //this.deleteUser('ABQFbm6JnlQx1eDSeBJh');
  // this.addUser('Kati', 17, 'Child', '07453468768');
  // this.updateUser('UlWHuHmaDgc2R0oTeFo0','Hanuka', 5, 'kiskocsag', '0776154686');
  // this.searchUserByID('UlWHuHmaDgc2R0oTeFo0');
  }
  async addUser(name, age, rank, phoneNumber) {
      try {
        const userId = await firebaseDb.storeDoc('Users',{
          Age: age,
          Name: name,
          Rank: rank,
          PhoneNumber: phoneNumber
        });

        console.log(userId);
      } catch (error) {
        console.log('storeUser has failed: ', error)
      }
  }

  async updateUser(documentID, newName, newAge, newRank, newPhoneNumber) {
    try {
      await firebaseDb.editDoc('Users', documentID, {
        age: user.age,
        name: user.name,
        rank: user.rank,
        phoneNumber: user.phoneNumber,
        uid: user.id
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
      console.log(datas);
    } catch (error) {
      console.log('searchUserbyID has failed: ', error);
    }
  }

}
const users = new UsersModule();

export default users;