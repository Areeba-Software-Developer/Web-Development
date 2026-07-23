let username;
let password;

function login(username, password){
    if(!username){
        throw new Error("Username required.");      
    }
    else if(!password){
        throw new Error("Password required.")
    }
    else {
        console.log("Login Successful!")
    }
}


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter username:",(username) =>{
    rl.question("Enter password:",(password) => {
      login(username,login);
      rl.close();
    })
})

