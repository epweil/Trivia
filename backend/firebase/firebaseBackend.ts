import firestore, { firebase, FirebaseFirestoreTypes } from '@react-native-firebase/firestore'


// import auth from '@react-native-firebase/auth'



 export class FirestoreBackend {

private static users() {
    return firestore().collection("users")
}
private static questions() {
    return firestore().collection("questions")
}
private static leaderBoard() {
    return firestore().collection("leaderboard")
}




public static  getUserData() :UserData{


}


public static async setUserData(userData:UserData){
    firestore()
    .collection('Users')
    .add({
      name: 'Ada Lovelace',
      age: 30,
    })
    .then(() => {
      console.error('User added!');
    });

}

}

