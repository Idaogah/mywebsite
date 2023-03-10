var eventDate = new Date("2023-03-31").getTime(); // Change this to your desired event date
function countdown() {
  
  
  var now = new Date().getTime();
  var remTime = eventDate - now;

  var sec = Math.floor(remTime / 1000);
  var min = Math.floor(sec / 60);
  var hrs = Math.floor(min / 60);
  var days = Math.floor(hrs / 24);

  hrs %= 24;
  min %= 60;
  sec %= 60;

  if (remTime <= 0) {
    eventDate = now + 7 * 24 * 60 * 60 * 1000;
    remTime = eventDate - now;
  }

  document.getElementById("dx").innerHTML = days + " Days ";
  document.getElementById("hx").innerHTML = hrs + " Hours ";
  document.getElementById("mx").innerHTML = min + " Minutes ";
  document.getElementById("sx").innerHTML = sec + " Seconds";
}

var countdownInterval = setInterval(countdown, 1000);
