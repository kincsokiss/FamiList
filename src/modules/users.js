import firebaseDb from "./firebase"

class UsersModule {
  async addUser(name, age, rank, phoneNumber, email) {
      try {
        const userId = await firebaseDb.storeDoc('Users',{
          age: age,
          name: name,
          rank: rank,
          phoneNumber: phoneNumber,
          email: email,
        });

        console.log(userId);
        return userId
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
        phoneNumber: user.phoneNumber,
        email: user.email,
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

  async searchUserbyEmail(email){
    try{
      const datas = await firebaseDb.searchDocbyEmail('Users', email);
      return datas;
    } catch(error) {
      console.log('searchUserbyUID has failed: ', error);
    }
  }

}
const users = new UsersModule();

export default users;