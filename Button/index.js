let count = 0
let CountEl = document.getElementById("count-el")

function increment() {
    count = count + 1

    console.log(count)
    CountEl.innerText = count
    //document.getElementById("count-el").innerText = count
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

