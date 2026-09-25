const hoursEl = document.getElementById("hour");
const minutesEl = document.getElementById("minute");
const secondsEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");
const dayEl = document.getElementById("day");
const dateEl = document.getElementById("date");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

function updateClock() {
	const now = new Date();
	let hours = now.getHours();
	const ampm = hours >= 12 ? "PM" : "AM";
	hours = hours % 12;
	hours = hours === 0 ? 12 : hours;

	const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const formattedHours = String(hours).padStart(2,"0")
    const formattedMinutes = String(minutes).padStart(2,"0")
    const formattedSeconds = String(seconds).padStart(2, "0")
    

    hoursEl.textContent = formattedHours
    minutesEl.textContent = formattedMinutes
    secondsEl.textContent = formattedSeconds
    ampmEl.textContent = ampm

    dayEl.textContent = days[now.getDay()];

    const date = now.getDate();
    const month = months[now.getMonth()]
    const year = now.getFullYear()

    dateEl.textContent = `${month} ${date}, ${year}`;
}


updateClock()
setInterval(updateClock, 1000);

