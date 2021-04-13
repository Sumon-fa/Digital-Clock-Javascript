function showTime() {
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  var y = "AM";

  if (h > 12) {

    h = h - 12;


  }
  if (h < 12) {
    y = "PM";
  }


  if (h < 10) {
    h = "0" + h;
  }

  if (m < 10) {
    m = "0" + m;
  }

  if (s < 10) {
    s = "0" + s;
  }

  var currentTime = h + ":" + m + ":" + s + " " + y;
  document.querySelector(".Clock").innerHTML = currentTime;

  setTimeout(showTime, 1000);


}
showTime();
