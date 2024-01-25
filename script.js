const enddate = "24 Decimber 2024  12:00:00 AM";

document.getElementById("endtime").innerHTML = enddate;

console.log(enddate);

clock = () => {
    const end = new Date(enddate);
    const now = new Date();
    let diff = (end - now);
// console.log(now);
    if (diff < 0) {
        return;
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("day").innerHTML = days;
    let hour = Math.floor(diff / (1000 * 60 * 60) % 24);
    document.getElementById("hours").innerHTML = hour;
    let min = Math.floor(diff / (1000 * 60) % 60);
    document.getElementById("minute").innerHTML = min;
    let sec = Math.floor(diff / (1000) % 60);
    document.getElementById("second").innerHTML = sec;

}

clock();

setInterval(() => {
    clock()
}, 1000);