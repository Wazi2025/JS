//conditionals oppgave
 
const userName = "tom";
const userAge = 19;
 
let userIsAdmin = true;
let userIsLoggedIn = false;
let userIsBlocked = false;
 
let goToPage = "";

if (userName !== null  || userAge >= 18 || userIsBlocked == false) {
   // console.log("error:",userName, userAge, userIsBlocked)
    }
else
{
    goToPage = "/home";
    userIsLoggedIn = true;
    console.log(goToPage);
    console.log(userName, userAge, userIsBlocked);
}

