class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
        this.score=0;
    }
    login(){
        console.log(`${this.name} has just logged in with email ${this.email}`);
        return this;
    }
    logout(){
        console.log(`${this.name} has just logged out`);
        return this;
    }
    updateScore(){
        this.score++;
        console.log(`Score is now ${this.score}`);
        return this;
    }
}

const user1= new User('Hitesh Kalathiya', 'hiteshkalathya@gmail.com');
const user2= new User('Om patel', 'ompatel@gmail.com');
user1.login().updateScore().updateScore().logout()
user2.login().updateScore().updateScore().updateScore().logout()