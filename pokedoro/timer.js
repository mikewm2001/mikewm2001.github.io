let workTimer;
let restTimer;
let minutesWork = 25;
let secondsWork = 0;
let working = true;

function startTimerWork() {
    button = document.getElementById("timerButtonWork")
    if (button.innerHTML === "Start Timer" || button.innerHTML === "Resume Timer") {
        if (!workTimer) {
            workTimer = setInterval(updateTimerWork, 1000);
            button.innerHTML = "Pause Timer";
        }
    } else if (button.innerHTML === "Pause Timer") {
        clearInterval(workTimer);
        workTimer = null;
        button.innerHTML = "Resume Timer"
    }
   
}

function resetTimerWork() {
    clearInterval(workTimer);
    workTimer = null;
    minutesWork = 25;
    secondsWork = 0;
    document.getElementById("workTimer").innerText = `${padZero(minutesWork)}:${padZero(secondsWork)}`;
    document.getElementById("timerButtonWork").innerHTML = "Start Timer"
    document.getElementById("body-wrapper1").style.backgroundColor = "#C6DBF0";
    document.getElementById("pageTitle").innerText = `${padZero(minutesWork)}:${padZero(secondsWork)}`;
}

function resetTimerRest() {
    clearInterval(workTimer);
    workTimer = null;
    minutesWork = 5;
    secondsWork = 0;
    document.getElementById("workTimer").innerText = `${padZero(minutesWork)}:${padZero(secondsWork)}`;
    document.getElementById("timerButtonWork").innerHTML = "Start Timer"
    document.getElementById("body-wrapper1").style.backgroundColor = "#F1B5CB";
    document.getElementById("pageTitle").innerText = `${padZero(minutesWork)}:${padZero(secondsWork)}`;
}

function updateTimerWork() {
    if (minutesWork === 0 && secondsWork === 0 && working === true) {
        clearInterval(workTimer);
        workTimer = null;
        working = false;
        alert("Work Completed! Rest now.");
        resetTimerRest();
    } else if (minutesWork === 0 && secondsWork === 0 && working === false) {
        clearInterval(workTimer);
        workTimer = null;
        working = true;
        alert("Rest Completed! Time to work!");
        resetTimerWork();
    } else {
        if (secondsWork === 0) {
            minutesWork--;
            secondsWork = 59;
            document.getElementById("pageTitle").innerText = `${padZero(minutesWork)}:${padZero(secondsWork)}`;
        } else {
            secondsWork --;
            document.getElementById("pageTitle").innerText = `${padZero(minutesWork)}:${padZero(secondsWork)}`;
        }
    }
    
    document.getElementById("workTimer").innerText = `${padZero(minutesWork)}:${padZero(secondsWork)}`;
}

function padZero (value) {
    if (value < 10) {
        return `0${value}`;
      } else {
        return String(value);
      }
}

function displayPokemon () {
    // Get the select element
    var selectElement = document.getElementById("pokemon");
    // Get the selected pokemon
    var selectedPokemon = selectElement.options[selectElement.selectedIndex];
    
    // Check which pokemon was selected
    if (selectedPokemon.value === "altaria") {
        document.getElementById("image").src = "8bitAltaria.webp"
        alert("You selected Altaria!");
    } else if (selectedPokemon.value === "dragonair") {
        document.getElementById("image").src = "8bitDragonair.webp"
        alert("You selected Dragonair!");
    } else if (selectedPokemon.value === "lapras") {
        document.getElementById("image").src = "8bitLapras.webp"
        alert("You selected Lapras!");
    } else if (selectedPokemon.value === "rowlet") {
        document.getElementById("image").src = "8bitRowlet.png"
        alert("You selected Rowlet!");
    } else if (selectedPokemon.value === "swablu") {
        document.getElementById("image").src = "8bitSwablu.webp"
        alert("You selected Swablu!");
    } else {
        alert("Unknown Pokemon selected!");
    }
}

function addTime() {
    if (minutesWork >= 95) {
        return
    } else {
        minutesWork += 5;
        document.getElementById("workTimer").innerText = `${padZero(minutesWork)}:${padZero(secondsWork)}`;
    }
}

function minusTime() {
    if (minutesWork <= 0) {
        return
    } else {
        minutesWork -= 1;
        document.getElementById("workTimer").innerText = `${padZero(minutesWork)}:${padZero(secondsWork)}`;
    }
}