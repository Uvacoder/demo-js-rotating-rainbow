const spinner = document.querySelector('img');
      let rotateCount = 0;
      let startTime = null;
      let rainbowFlip;

      
      function draw(timestamp) {
        if(!startTime) {
         startTime = timestamp;
        }

        rotateCount = (timestamp - startTime) / 5;

  
        if(rotateCount > 359) {
          rotateCount %= 360;
        }

        // Set the rotation of the img to be equal to rotateCount degrees
        spinner.style.transform = 'rotate(' + rotateCount + 'deg)';

        // Call the next frame in the animation
       rainbowFlip = requestAnimationFrame(draw);
      }

      draw();
