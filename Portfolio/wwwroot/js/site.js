// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function update(counter){
    var startDate = new Date("2021-01-01");
    var difference = new Date() - startDate;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    counter.innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
}

function startCounter(){
    var counter = document.getElementById("counter");
    setInterval(()=>update(counter), 1000)
}

startCounter();
