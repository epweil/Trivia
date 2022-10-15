export interface UserData = {
    uid:string,
    name:string,
    score:number,
    username:string
    scores:{[date:number]:{question}}
}

export interface question = {
    question:string,
    option1:stirng
    option2:string
    option3:string
    option4:string
    userAnswer:number
    answer:number

}

export leaderBoard = {
    date:{
        {uid: userLeaderboard}
    }
}

export interface userLeaderboard = {

        username:string
        score:number
}