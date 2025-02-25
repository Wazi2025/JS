let count = 0
let CountEl = document.getElementById("count-el")

let img = document.createElement("img");

let picURL = "gfx/sal.png";
const picSAL = "gfx/sal.png";
const picSalute = "gfx/Salute.jpg";

function increment() {
    count = count + 1

    console.log(count)
    CountEl.innerText = count

        
    showImage(img);

}

function showImage(img) {

    //switches between the two images when button is clicked
    if (picURL == picSAL) {
        picURL = picSalute;
    } else {
        picURL = picSAL;
    }

    img.src = picURL;

    document.body.appendChild(img);
    console.log(picURL);
    document.replaceChild
}


let Lap1 = 34
let Lap2 = 35

function addTimes() {
    totalTime = Lap1 + Lap2
    console.log(totalTime)
}

addTimes()

let lapsCompleted = 0

function incrementLapTimes(){
    lapsCompleted = lapsCompleted + 3
    return lapsCompleted
}

console.log(incrementLapTimes())

