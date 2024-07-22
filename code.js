$(document).ready(function () {
    $(".header-fullwidth-sticky li").click(function () {
      $(".header-fullwidth-sticky li").removeClass("active");
      $(this).addClass("active");
    });

    $(".hamburger").click(function () {
      $("#offcanvasExample").toggleClass("show");
    });
  });



  function countUpAll(targetMillion, targetYears, targetCustomer, targetWheels, targetPercentage, startMillion, startYears, startCustomer, startWheels, startPercentage, endMillion, endYears, endCustomer, endWheels, endPercentage, duration) {
    const elementMillion = document.getElementById(targetMillion);
    const elementYears = document.getElementById(targetYears);
    const elementCustomer = document.getElementById(targetCustomer);
    const elementWheels = document.getElementById(targetWheels);
    const elementPercentage = document.getElementById(targetPercentage);

    const rangeMillion = endMillion - startMillion;
    const rangeYears = endYears - startYears;
    const rangeCustomer = endCustomer - startCustomer;
    const rangeWheels = endWheels - startWheels;
    const rangePercentage = endPercentage - startPercentage;

    const incrementMillion = endMillion > startMillion ? rangeMillion / (duration / 20) : 0;
    const incrementYears = endYears > startYears ? rangeYears / (duration / 20) : 0;
    const incrementCustomer = endCustomer > startCustomer ? rangeCustomer / (duration / 20) : 0;
    const incrementWheels = endWheels > startWheels ? rangeWheels / (duration / 20) : 0;
    const incrementPercentage = endPercentage > startPercentage ? rangePercentage / (duration / 20) : 0;

    let currentMillion = startMillion;
    let currentYears = startYears;
    let currentCustomer = startCustomer;
    let currentWheels = startWheels;
    let currentPercentage = startPercentage;

    const timer = setInterval(function() {
      let millionDone = false;
      let yearsDone = false;
      let customerDone = false;
      let wheelsDone = false;
      let percentageDone = false;

      if (currentMillion < endMillion) {
        currentMillion += incrementMillion;
        elementMillion.textContent = currentMillion.toFixed(2) + " Million";
      } else {
        elementMillion.textContent = endMillion.toFixed(2) + " Million";
        millionDone = true;
      }

      if (currentYears < endYears) {
        currentYears += incrementYears;
        elementYears.textContent = Math.floor(currentYears) + " Years";
      } else {
        elementYears.textContent = endYears + " Years";
        yearsDone = true;
      }

      if (currentCustomer < endCustomer) {
        currentCustomer += incrementCustomer;
        elementCustomer.textContent = currentCustomer.toFixed(3);
      } else {
        elementCustomer.textContent = endCustomer.toFixed(3);
        customerDone = true;
      }

      if (currentWheels < endWheels) {
        currentWheels += incrementWheels;
        elementWheels.textContent = currentWheels.toFixed(2);
      } else {
        elementWheels.textContent = endWheels.toFixed(2);
        wheelsDone = true;
      }

      if (currentPercentage < endPercentage) {
        currentPercentage += incrementPercentage;
        elementPercentage.textContent = Math.floor(currentPercentage) + " %";
      } else {
        elementPercentage.textContent = endPercentage.toFixed(0) + " %";
        percentageDone = true;
      }

      // Check if all animations are done
      if (millionDone && yearsDone && customerDone && wheelsDone && percentageDone) {
        clearInterval(timer);
      }
    }, 20);
  }

  // Start the count-up animations when the window loads
  window.onload = function() {
    // Count from 0 to 560.402 for Million, 0 to 10 for Years, 0 to 560.402 for customer, 0 to 1.25 for Wheels, and 0 to 98 for percentage
    const targetMillion = "Million-countup";
    const targetYears = "Years";
    const targetCustomer = "customer";
    const targetWheels = "Wheels";
    const targetPercentage = "percentage";
    const startMillion = 0;
    const startYears = 0;
    const startCustomer = 0;
    const startWheels = 0;
    const startPercentage = 0;
    const endMillion = 1.75;
    const endYears = 10;
    const endCustomer = 560.402;
    const endWheels = 1.25;
    const endPercentage = 98;
    const duration = 3000;

    countUpAll(targetMillion, targetYears, targetCustomer, targetWheels, targetPercentage, startMillion, startYears, startCustomer, startWheels, startPercentage, endMillion, endYears, endCustomer, endWheels, endPercentage, duration);
  };





$(document).ready(function() {
  // Define an array of prices
  var prices = [
    { price1: '500.32', price2: '520.24',logo: 'logosandimages/testimg.png' ,logo2:'homepage/rim-brands/R3Wheels_35px.png'  },
    { price1: '480.00', price2: '510.50',logo: 'logosandimages/testimg2.png',logo2:'homepage/rim-brands/Keskin_35px.png'  },
    { price1: '510.75', price2: '530.00',logo: 'logosandimages/testimg3.png',logo2:'homepage/rim-brands/DaminaPerformance_35px.png'  },
    { price1: '511.75', price2: '488.00',logo: 'logosandimages/testimg.png' ,logo2:'homepage/rim-brands/MAM_35px.png'  },
    { price1: '591.75', price2: '445.00',logo: 'logosandimages/testimg2.png',logo2:'homepage/rim-brands/R3Wheels_35px.png'  },
    { price1: '541.75', price2: '408.00',logo: 'logosandimages/testimg3.png',logo2:'homepage/rim-brands/DaminaPerformance_35px.png'  },
  ];

  // Initialize index to track current prices
  var currentIndex = 0;

  // Function to update prices and images
  function updatePricesAndImages() {
    // Get the current set of prices from the array
    var currentPrices = prices[currentIndex];

    // Update prices in the UI
    // $('#marked-price-1').text(currentPrices.price1);
    // $('#marked-price-2').text(currentPrices.price2);

    // // update logo
    // $('#logo_').attr('src', currentPrices.logo);
    // $('#logo_2').attr('src', currentPrices.logo2);

    // Update images in carouselExampleControls1
    $('#carouselExampleControls1').carousel('next'); // Slide to next image in carouselExampleControls1

    // Update images in carouselExampleControls
    $('#carouselExampleControls').carousel('next'); // Slide to next image in carouselExampleControls

    // updating autoplaying

    
    // Update images in carouselExampleAutoplaying
    $('#carouselExampleAutoplaying').carousel('next'); // Slide to next image in carouselExampleAutoplaying


    // Increment the index to move to the next set of prices
    currentIndex = (currentIndex + 1) % prices.length;
  }

  // Function to automatically update prices and images at intervals
  function autoUpdate() {
    updatePricesAndImages(); // Call function to update prices and images
  }

  // Set interval to call autoUpdate every 2 seconds (adjust interval as needed)
  setInterval(autoUpdate, 2000); // 2000 milliseconds = 2 seconds

  // Initialize both carousels with the same interval
  $('#carouselExampleControls').carousel({
    interval: 2000 // Set interval for carouselExampleControls
  });

  $('#carouselExampleControls1').carousel({
    interval: 2000 // Set interval for carouselExampleControls1
  });

  // update auto playing
  $('#carouselExampleAutoplaying').carousel({
    interval: 2000 // Set interval for carouselExampleAutoplaying
  });


  // Event listener for Rnext-button click
  $('#Rnext-button').click(function() {
    updatePricesAndImages(); // Call function to update prices and images
  });
});





// top header animation


document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll('.header-fullwidth li');
  const displayHere = document.getElementById('displayhere');
  let index = 0;
  const intervalDuration = 2000; // Interval duration in milliseconds

  function displayNextItem() {
      displayHere.innerHTML = items[index].innerHTML;
      index = (index + 1) % items.length; // Move to the next item, wrap around if at end
  }

  // Initially display the first item
  displayNextItem();

  // Repeat displaying items after the interval duration
  setInterval(displayNextItem, intervalDuration);

  // Adjust behavior for screens 425px and below
  function adjustDisplayForSmallScreens() {
      if (window.innerWidth <= 425) {
          // Hide all list items except the placeholder
          items.forEach((item, idx) => {
              if (idx !== items.length - 1) { // Exclude the last item (placeholder)
                  item.style.display = 'none';
              }
          });
      } 
      else {
          // Reset display for larger screens
          items.forEach(item => {
              item.style.display = 'flex';
          });
      }
  }

  // Call adjustDisplayForSmallScreens initially and on window resize
  adjustDisplayForSmallScreens();
  window.addEventListener('resize', adjustDisplayForSmallScreens);
});


