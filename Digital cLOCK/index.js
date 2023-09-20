function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var amPm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert from 24 hour time to 12 hour time
    if (hours > 12) {
      hours -= 12;
    }
  
    // Add leading zeros to single digit minutes and seconds
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
  
    // var timeString = hours + ':' + minutes + ':' + seconds + ' ' + amPm;
  
    // Update the clock
    // document.getElementById('clock').innerHTML = timeString;
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('sec').innerHTML = seconds;
    document.getElementsByClassName('am').innerHTML = amPm;
  }
  
  // Call updateTime() every second to update the clock
  setInterval(updateTime, 1000);

// Month generator
  var mydate = new Date()
let months = ["january", "febrauray", "march", "april", "may", "june", "july","august","september","october","november","december"]
var month = mydate.getMonth()
console.log(months[month])

  