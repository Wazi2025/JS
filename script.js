//conditionals oppgave
 
const userName = "Tom";

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

//if (userAge >= 18 && userNameLength === true && userName === "tom") 
if (userAge >= 18 && userName === "Tom" && userIsBlocked === false)
   {
   
    goToPage = "/home";
    userIsLoggedIn = true;
    if (userIsAdmin) {
        goToPage = "/admin";
}
     
     console.log(goToPage);
     console.log("Name:",userName, "Age:",userAge, "Blocked:",userIsBlocked, "LoggedIn:",userIsLoggedIn,);
    }
else
{
   userIsAdmin = false;
   goToPage = "/home";
    //console.log("error: ",userName, userAge, userIsBlocked, userIsLoggedIn);
    console.log(goToPage);
    console.log("Error! ","Name:",userName, "Age:",userAge, "Blocked:",userIsBlocked, "LoggedIn:",userIsLoggedIn,);
    
}

