let today = new Date();
let hour = today.getHours();
let minute = today.getMinutes();
const weekday = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

document.querySelector(".day").innerHTML = weekday[today.getDay()];

window.onload = formatHour();

function formatHour() {
	if (hour == 0) {
		hour = 12;
		document.querySelector(".am").classList.add("active");
	} else if (hour == 12){
        document.querySelector(".pm").classList.add("active");
    } else if (hour > 12) {
		if (hour != 12) {
			hour = hour - 12;
			document.querySelector(".pm").classList.add("active");
		}
	} else {
		document.querySelector(".am").classList.add("active");
	}
}

function displayTime() {

    let i = 8;
	while (hour >= 1 ) {
		if (hour >= i) {
			document.querySelector(`.hour-${i}`).classList.add(`active`);
			hour -= i;
			i /= 2;
		} else {
			i /= 2;
		}
	}
	i = 32;
	while (minute >= 1) {
		if (minute >= i) {
			document.querySelector(`.minute-${i}`).classList.add(`active`);
			minute -= i;
			i /= 2;
		} else {
			i /= 2;
		}
	}
}

displayTime();

setInterval(() => {
	let currentMinute = new Date().getMinutes();
    console.log(currentMinute);
	if (currentMinute !== minute) {
		minute = currentMinute;
		document.querySelectorAll('.active').forEach(elem => {
			elem.classList.remove('active');
		});
        hour = today.getHours();
        formatHour();
		displayTime();
	}
}, 1000);