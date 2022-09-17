function christamsCountDown() {
    const christamsDate = new Date("December 25, 2022 00:00");
    const now = new Date();
    const diff = christamsDate - now;
    console.log(diff);

    const msInSeconds = 1000;
    const msInMinutes = 60 * 1000;
    const msInHours = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor(diff % msInDay / msInHours);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor(diff % msInHours / msInMinutes);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor(diff % msInMinutes / msInSeconds);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff <= 0){
        clearInterval(timeID)
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;

        merryChristmas()
    }
    

}
let timeID = setInterval(christamsCountDown, 1000)

function merryChristmas() {
    const heading = document.querySelector("h1")
    heading.textContent = "MERRY CHRISTMAS!!"
    heading.classList.add("red")

}


const button = document.querySelector("#myButton");
button.addEventListener("click", function(){
document.querySelector("#audio").play();
})








