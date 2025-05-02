var CountDownDate = new Date("Feb 25, 2025 23:59:59").getTime();

      var x = setInterval(function(){
          var now = new Date().getTime();
      
          var distance = CountDownDate - now;
      
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
          document.getElementById("launch_countdown").innerHTML = "Releasing in " + days + " days " + hours + " hrs " + minutes + " min " + seconds + " sec "
      
          if (distance < 0) {
              clearInterval(x);
              document.getElementById(launch_countdown) = "AVAILABLE NOW";
          }
      
      }, 1000);