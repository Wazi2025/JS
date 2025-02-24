//conditionals oppgave
 
const userName = "tom";

let userNameLength = userName.length;
const userAge = 18;

 if (userNameLength >= 1) {
    console.log("Username is valid");
    userNameLength = true;
 } else {
    console.log("Username is not valid");
    userNameLength = false;
}

let userIsAdmin = true;
let userIsLoggedIn = false;
let userIsBlocked = false;
 
let goToPage = "";

if (userAge >= 18 && userNameLength === true && userName === "tom") 
   {
   
     goToPage = "/home";
     userIsLoggedIn = true;
     console.log(goToPage);
     console.log(userName, userAge, userIsBlocked, userIsLoggedIn,);
    }
else
{
   
    console.log("error: ",userName, userAge, userIsBlocked, userIsLoggedIn);
    console.log(goToPage)
}

