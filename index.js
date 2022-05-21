let countFetch = 0;
const fetchBtn = document.getElementById("fetch-btn");
const fetchNum = document.getElementById("fetch-num");

function incrementFetch() {
	//console.log("FETCH was clicked");
	countFetch++;
	//console.log(countFetch);
	fetchNum.innerText = countFetch;
	//console.log(fetchNum);
	healthCheck();
};

let countEat = 0;
const eatBtn = document.getElementById("eat-btn");
const eatNum = document.getElementById("eat-num");

function incrementEat() {
	//console.log("FETCH was clicked");
	countEat++;
	//console.log(countFetch);
	eatNum.innerText = countEat;
	//console.log(fetchNum);
	healthCheck();
};

let countSleep = 0;
const sleepBtn = document.getElementById("sleep-btn");
const sleepNum = document.getElementById("sleep-num");

function incrementSleep() {
	//console.log("FETCH was clicked");
	countSleep++;
	//console.log(countFetch);
	sleepNum.innerText = countSleep;
	//console.log(fetchNum);
	healthCheck();
};



const activityImage = document.getElementById("activity");
const rockyStatus = document.getElementById("status");

function healthCheck() {
	if (countFetch === 3 && !fetchBtn.disabled) {
		fetchNum.innerText = countFetch;
		fetchBtn.disabled = true;
		rockyStatus.innerText = "Rocky, your worked up an appetite!";
		activityImage.src = "images/rocky-hungry.jpg";
	} else {
		if (countEat === 3 && !eatBtn.disabled) {
		eatNum.innerText = countEat;
		eatBtn.disabled = true;
		rockyStatus.innerText = "Rocky, it's time for a nap!";
		activityImage.src = "images/rocky-sleepy.jpg";
	} else {
		if (countSleep === 3 && !sleepBtn.disabled) {
		sleepNum.innerText = countSleep;
		sleepBtn.disabled = true;
		rockyStatus.innerText = "Rocky, you need to go for a run!";
		activityImage.src = "images/rocky-fetch.png";
	}
}
}
}
function reset() {
//console.log("RESET was clicked");
activityImage.src = "images/rocky.jpg";
fetchBtn.disabled = false;
eatBtn.disabled = false;
sleepBtn.disabled = false;
countFetch = 0;
countEat = 0;
countSleep = 0;
fetchNum.innerText = countFetch;
eatNum.innerText = countEat;
sleepNum.innerText = countSleep;
rockyStatus.innerText = "You are one healthy dog!";

}