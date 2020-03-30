
// how to display current time in clock
var noon = 12;

var showCurrentTime = function() {
  var clock = document.getElementById('clock');

  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM"

  // setting the hour area on the clock
  if (hours >= noon) { meridian = "PM"; }

  if (hours > noon) { hours = hours - 12; }

  // set mins on clock
  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }

  var clockTime = `${hours}:${minutes}:${seconds}!`;
  // var clockTime = hours + ":" + minutes + ":" + seconds + "!";

  clock.innerText = clockTime;
};

// increment clock and change messages and pics
var updateClock = function() {
  var time = new Date().getHours();
  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  var timeEventJS = document.getElementById("timeEvent");

}
