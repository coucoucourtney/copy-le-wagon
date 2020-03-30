console.log("Hello from src/index.js!");


// how to display current time in clock
const wakeuptime = 7;
const noon = 12;
const lunchtime = 12;
const naptime = lunchtime + 2;
let partytime;
const evening = 18;

const showCurrentTime = () => {
  const clock = document.getElementById('clock');

  const currentTime = new Date();
  console.log(currentTime);

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let meridian = "AM";

  // setting the hour area on the clock
  if (hours >= noon) { meridian = "PM"; }

  if (hours > noon) { hours -= 12; }

  // set mins on clock
  if (minutes < 10) { minutes = `0${minutes}`; }
  if (seconds < 10) { seconds = `0${seconds}`; }

  const clockTime = `${hours}:${minutes}:${seconds}!`;
  // var clockTime = hours + ":" + minutes + ":" + seconds + "!";

  clock.innerHTML = clockTime;
};

// increment clock and change messages and pics
const updateClock = () => {
  const time = new Date().getHours();
  let messageText;
  let image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  const timeEventJS = document.getElementById("timeEvent");
  const lolcatImage = document.getElementById("lolcatImage");

  if (time === partytime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "It's Time To Partyyyy!";
  } else if (time === wakeuptime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Wake up!";
  } else if (time === lunchtime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Eat Lunch!";
  } else if (time === naptime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Naptime";
  } else if (time < noon) {
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    messageText = "Mornin'";
  } else if (time >= evening) {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Gooood Eeeevening";
  } else {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon";
  }

  console.log(messageText);
  timeEventJS.innnerHTML = messageText;
  lolcatImage.src = image;
  showCurrentTime();
};

updateClock();

// incrementing clock by seconds
const oneSecond = 1000;
// done in milliseconds
setInterval(updateClock, oneSecond);
