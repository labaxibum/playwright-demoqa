export class Users {
    constructor(username, password, userID){
        this.username = username;
        this.password = password;
        this.userID = userID;
    }
    getUsername(){
        return this.username;
    }
    getPassword(){
        return this.password;
    }
    getUserID(){
        return this.userID;
    }
}