// Time tracking variables
let hourCount = 0;
let minuteCount = 0;
let secondCount = 0;
let timerInterval = null;
let timerActive = false;

// Function to update time display
function updateTimeDisplay() {
    const timeDisplay = document.getElementById("timeDisplay");
    let hours = hourCount < 10 ? "0" + hourCount : hourCount;
    let minutes = minuteCount < 10 ? "0" + minuteCount : minuteCount;
    let seconds = secondCount < 10 ? "0" + secondCount : secondCount;
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Function to start the timer
function beginTimer() {
    if (!timerActive) {
        timerActive = true;
        timerInterval = setInterval(() => {
            secondCount++;
            if (secondCount === 60) {
                secondCount = 0;
                minuteCount++;
                if (minuteCount === 60) {
                    minuteCount = 0;
                    hourCount++;
                }
            }
            updateTimeDisplay();
        }, 1000);
    }
}

// Function to pause the timer
function haltTimer() {
    clearInterval(timerInterval);
    timerActive = false;
}

// Function to reset the timer
function clearTimer() {
    haltTimer();
    hourCount = 0;
    minuteCount = 0;
    secondCount = 0;
    updateTimeDisplay();
    document.getElementById("lapRecords").innerHTML = '';  // Clear lap records
}

// Function to record lap times
function recordLapTime() {
    if (timerActive) {
        const lapRecords = document.getElementById("lapRecords");
        const lapItem = document.createElement("li");
        lapItem.textContent = document.getElementById("timeDisplay").textContent;
        lapRecords.appendChild(lapItem);
    }
}

// Event listeners for buttons
document.getElementById("beginBtn").addEventListener("click", beginTimer);
document.getElementById("haltBtn").addEventListener("click", haltTimer);
document.getElementById("clearBtn").addEventListener("click", clearTimer);
document.getElementById("recordBtn").addEventListener("click", recordLapTime);