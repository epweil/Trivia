import firestore, { firebase, FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

import auth from '@react-native-firebase/auth'





private static users() {
    return firestore().collection("users")
}
private static questions() {
    return firestore().collection("questions")
}
private static leaderBoard() {
    return firestore().collection("leaderboard")
}




export function getUserData() :UserData{


}


export function setUserData(userData:UserData){

    users().doc("ethan").set(userData,merge= true)

}

