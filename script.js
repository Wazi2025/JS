//conditionals oppgave
 
const userName = "Tom";
const userAge = 18;
 
let userIsAdmin = true;
let userIsLoggedIn = false;
let userIsBlocked = false;
 
let goToPage = "";

if (userName !==""  && userAge > 18 && userIsBlocked == false)
    console.log("error")
else
{
    goToPage = "/home";
    userIsLoggedIn = true;
}

