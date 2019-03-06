//ready document with jQuery
$(document).ready(() => {
  var targetNumber = 0;
  var number = 0;
  var numberOption = []; //add to the counter when crystal is pressed
  //computer randomly picks a number between 19-120
  var wins = 0;
  var losses = 0;
  var totalScore = 0;
  var counter = 0;

  var imagesArray = [
    "assets/images/diamond.jpg",
    "assets/images/amnethyst.jpg",
    "assets/images/ruby.jpg",
    "assets/images/emerald.jpg"
  ];

  var randomNumber = function() {
    return Math.floor(Math.random() * (121 - 19)) + 19;
  };

  targetNumber = randomNumber();
  console.log(targetNumber);
  //declaring the computer number as the target number

  $("#number-to-guess").text(targetNumber);

  //randomly assign value to crystals between 1-12
  var crystalNumber = function() {
    return Math.floor(Math.random() * (13 - 1)) + 1;
  };

  var numberOptions = [];

  //for loop to create a crystal for numberOptions by
  //grabbing 4 random numbers and putting them in array
  for (var i = 0; i < 4; i++) {
    number = crystalNumber();
    numberOptions.push(number);
    console.log(numberOptions[i]);
  }
  for (var i = 0; i < imagesArray.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", imagesArray[i]);
    imageCrystal.width("64px");
    imageCrystal.height("64px");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
  }

  $(".crystal-image").on("click", function() {
    var crystalValue = $(this).attr("data-crystalvalue");
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    alert("New score: " + counter);
    if (counter === targetNumber) {
      counter = 0;
      alert("You Win!");
      wins++;
    } else if (counter >= targetNumber) {
      alert("You lose!!");
      losses++;
    }
    updateHtml();
    // function that updates the html to be called below
    //call reset win or lose which will also add the points
  });
  function updateHtml() {
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#total-score").text(counter);
  }

  function resetGame() {}
});
//create function that sets html and reset game outside of document.ready

// function updateHtml() {
//   $("#wins").text(wins);
//   $("#losses").text(losses);
//   $("#total-score").text(counter);
// }

// function resetGame() {}
//     imageCrystal;

//     number = crystalNumber();
//     numberOption.push(number);
//     console.log(numberOption[i]);
//   }

//set global variables

//start game

//function to print target number to element id

//function to print to browser total wins and losses

//function to add up player clicks and print to total element id
