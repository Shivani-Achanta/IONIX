(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    const countdownDate = new Date("May 8, 2024 00:00:00").getTime();
    
    const x = setInterval(function() {    
      const now = new Date().getTime(),
            distance = countdownDate - now;
  
      document.getElementById("days").innerText = Math.floor(distance / (day)),
      document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
      // Do something when the date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's the day!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
    }, 0);
  }());
  