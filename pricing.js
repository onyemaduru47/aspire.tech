let defaultColor = "hsl(229, 8%, 60%)";
let defaultBorder = "none";

let tabOne = document.getElementById("tabOne");
let tabTwo = document.getElementById("tabTwo");
let tabThree = document.getElementById("tabThree");
let tabFour = document.getElementById("tabFour");
let tabFive = document.getElementById("tabFive");
let tabSix = document.getElementById("tabSix");
let tabSeven = document.getElementById("tabSeven");
let tabEight = document.getElementById("tabEight");
let tabNine = document.getElementById("tabNine");

let switchable_components_one = document.getElementById('switchable_components_one');
let switchable_components_two = document.getElementById('switchable_components_two');
let switchable_components_three = document.getElementById('switchable_components_three');
let switchable_components_four = document.getElementById('switchable_components_four');
let switchable_components_five = document.getElementById('switchable_components_five');
let switchable_components_six = document.getElementById('switchable_components_six');
let switchable_components_seven = document.getElementById('switchable_components_seven');
let switchable_components_eight = document.getElementById('switchable_components_eight');
let switchable_components_nine = document.getElementById('switchable_components_nine');

function firstTab() {

  tabOne.style.color = "hsl(229, 31%, 21%)";
  tabOne.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
  switchable_components_one.style.display = "inline-flex"
  //changing the other tabs to their defaults...
  tabTwo.style.color = defaultColor;
  tabTwo.style.borderBottom = defaultBorder;

  tabThree.style.color = defaultColor;
  tabThree.style.borderBottom = defaultBorder;

  tabFive.style.color = defaultColor;
  tabFive.style.borderBottom = defaultBorder;

  tabFour.style.color = defaultColor;
  tabFour.style.borderBottom = defaultBorder;

  tabSix.style.color = defaultColor;
  tabSix.style.borderBottom = defaultBorder;

  tabSeven.style.color = defaultColor;
  tabSeven.style.borderBottom = defaultBorder;

  tabEight.style.color = defaultColor;
  tabEight.style.borderBottom = defaultBorder;
  
  tabNine.style.color = defaultColor;
  tabNine.style.borderBottom = defaultBorder;
    //Hiding the others...
  switchable_components_two.style.display = "none";
  switchable_components_three.style.display = "none";
  switchable_components_four.style.display = "none";
  switchable_components_five.style.display = "none";
  switchable_components_six.style.display = "none";
  switchable_components_seven.style.display = "none";
  switchable_components_eight.style.display = "none";
  switchable_components_nine.style.display = "none";
}

function secondTab() {

  tabTwo.style.color = "hsl(229, 31%, 21%)";
  tabTwo.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
  switchable_components_two.style.display = "inline-flex";
  //changing the other tabs to their defaults...
  tabOne.style.color = defaultColor;
  tabOne.style.borderBottom = defaultBorder;

  tabThree.style.color = defaultColor;
  tabThree.style.borderBottom = defaultBorder;

  tabFive.style.color = defaultColor;
  tabFive.style.borderBottom = defaultBorder;

  tabFour.style.color = defaultColor;
  tabFour.style.borderBottom = defaultBorder;

  tabSix.style.color = defaultColor;
  tabSix.style.borderBottom = defaultBorder;

  tabSeven.style.color = defaultColor;
  tabSeven.style.borderBottom = defaultBorder;

  tabEight.style.color = defaultColor;
  tabEight.style.borderBottom = defaultBorder;
  
  tabNine.style.color = defaultColor;
  tabNine.style.borderBottom = defaultBorder;
  //Hiding the others...
switchable_components_one.style.display = "none";
switchable_components_three.style.display = "none";
switchable_components_four.style.display = "none";
switchable_components_five.style.display = "none";
switchable_components_six.style.display = "none";
switchable_components_seven.style.display = "none";
switchable_components_eight.style.display = "none";
switchable_components_nine.style.display = "none";
}

function thirdTab() {

  tabThree.style.color = "hsl(229, 31%, 21%)";
  tabThree.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
  switchable_components_three.style.display = "inline-flex";
  //changing the other tabs to their defaults...
  tabOne.style.color = defaultColor;
  tabOne.style.borderBottom = defaultBorder;

  tabTwo.style.color = defaultColor;
  tabTwo.style.borderBottom = defaultBorder;

  tabFive.style.color = defaultColor;
  tabFive.style.borderBottom = defaultBorder;

  tabFour.style.color = defaultColor;
  tabFour.style.borderBottom = defaultBorder;

  tabSix.style.color = defaultColor;
  tabSix.style.borderBottom = defaultBorder;

  tabSeven.style.color = defaultColor;
  tabSeven.style.borderBottom = defaultBorder;

  tabEight.style.color = defaultColor;
  tabEight.style.borderBottom = defaultBorder;
  
  tabNine.style.color = defaultColor;
  tabNine.style.borderBottom = defaultBorder;
  //Hiding the others...
switchable_components_one.style.display = "none";
switchable_components_two.style.display = "none";
switchable_components_four.style.display = "none";
switchable_components_five.style.display = "none";
switchable_components_six.style.display = "none";
switchable_components_seven.style.display = "none";
switchable_components_eight.style.display = "none";
switchable_components_nine.style.display = "none";
}

function fourthTab() {

  tabFour.style.color = "hsl(229, 31%, 21%)";
  tabFour.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
  switchable_components_four.style.display = "inline-flex";
  //changing the other tabs to their defaults...
  tabThree.style.color = defaultColor;
  tabThree.style.borderBottom = defaultBorder;

  tabTwo.style.color = defaultColor;
  tabTwo.style.borderBottom = defaultBorder;

  tabFive.style.color = defaultColor;
  tabFive.style.borderBottom = defaultBorder;
  
  tabOne.style.color = defaultColor;
  tabOne.style.borderBottom = defaultBorder;

  tabSix.style.color = defaultColor;
  tabSix.style.borderBottom = defaultBorder;
  
  tabSeven.style.color = defaultColor;
  tabSeven.style.borderBottom = defaultBorder;
  
  tabEight.style.color = defaultColor;
  tabEight.style.borderBottom = defaultBorder;
  
  tabNine.style.color = defaultColor;
  tabNine.style.borderBottom = defaultBorder;
  //Hiding the others...
switchable_components_three.style.display = "none";
switchable_components_two.style.display = "none";
switchable_components_one.style.display = "none";
switchable_components_five.style.display = "none";
switchable_components_six.style.display = "none";
switchable_components_seven.style.display = "none";
switchable_components_eight.style.display = "none";
switchable_components_nine.style.display = "none";
}

function fifthTab() {

  tabFive.style.color = "hsl(229, 31%, 21%)";
  tabFive.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
  switchable_components_five.style.display = "inline-flex";
  //changing the other tabs to their defaults...
  tabThree.style.color = defaultColor;
  tabThree.style.borderBottom = defaultBorder;

  tabTwo.style.color = defaultColor;
  tabTwo.style.borderBottom = defaultBorder;

  tabFour.style.color = defaultColor;
  tabFour.style.borderBottom = defaultBorder;
  
  tabOne.style.color = defaultColor;
  tabOne.style.borderBottom = defaultBorder;

  tabSix.style.color = defaultColor;
  tabSix.style.borderBottom = defaultBorder;
  
  tabSeven.style.color = defaultColor;
  tabSeven.style.borderBottom = defaultBorder;

  tabEight.style.color = defaultColor;
  tabEight.style.borderBottom = defaultBorder;
  
  tabNine.style.color = defaultColor;
  tabNine.style.borderBottom = defaultBorder;
  //Hiding the others...
switchable_components_three.style.display = "none";
switchable_components_two.style.display = "none";
switchable_components_one.style.display = "none";
switchable_components_four.style.display = "none";
switchable_components_six.style.display = "none";
switchable_components_seven.style.display = "none";
switchable_components_eight.style.display = "none";
switchable_components_nine.style.display = "none";
}

function sixthTab() {

  tabSix.style.color = "hsl(229, 31%, 21%)";
  tabSix.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
  switchable_components_six.style.display = "inline-flex";
  //changing the other tabs to their defaults...
  tabThree.style.color = defaultColor;
  tabThree.style.borderBottom = defaultBorder;

  tabTwo.style.color = defaultColor;
  tabTwo.style.borderBottom = defaultBorder;

  tabFour.style.color = defaultColor;
  tabFour.style.borderBottom = defaultBorder;
  
  tabOne.style.color = defaultColor;
  tabOne.style.borderBottom = defaultBorder;

  tabFive.style.color = defaultColor;
  tabFive.style.borderBottom = defaultBorder;
  
  tabSeven.style.color = defaultColor;
  tabSeven.style.borderBottom = defaultBorder;

  tabEight.style.color = defaultColor;
  tabEight.style.borderBottom = defaultBorder;
  
  tabNine.style.color = defaultColor;
  tabNine.style.borderBottom = defaultBorder;
  //Hiding the others...
  switchable_components_three.style.display = "none";
  switchable_components_two.style.display = "none";
  switchable_components_one.style.display = "none";
  switchable_components_four.style.display = "none";
  switchable_components_five.style.display = "none";
  switchable_components_seven.style.display = "none";
  switchable_components_eight.style.display = "none";
  switchable_components_nine.style.display = "none";
}

function seventhTab() {

  tabSeven.style.color = "hsl(229, 31%, 21%)";
  tabSeven.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
  switchable_components_seven.style.display = "inline-flex";
  //changing the other tabs to their defaults...
  tabThree.style.color = defaultColor;
  tabThree.style.borderBottom = defaultBorder;

  tabTwo.style.color = defaultColor;
  tabTwo.style.borderBottom = defaultBorder;

  tabFour.style.color = defaultColor;
  tabFour.style.borderBottom = defaultBorder;
  
  tabOne.style.color = defaultColor;
  tabOne.style.borderBottom = defaultBorder;

  tabSix.style.color = defaultColor;
  tabSix.style.borderBottom = defaultBorder;
  
  tabFive.style.color = defaultColor;
  tabFive.style.borderBottom = defaultBorder;

  tabEight.style.color = defaultColor;
  tabEight.style.borderBottom = defaultBorder;
  
  tabNine.style.color = defaultColor;
  tabNine.style.borderBottom = defaultBorder;
  //Hiding the others...
switchable_components_three.style.display = "none";
switchable_components_two.style.display = "none";
switchable_components_one.style.display = "none";
switchable_components_four.style.display = "none";
switchable_components_five.style.display = "none";
switchable_components_six.style.display = "none";
switchable_components_eight.style.display = "none";
switchable_components_nine.style.display = "none";
}

function eighthTab() {

  tabEight.style.color = "hsl(229, 31%, 21%)";
  tabEight.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
  switchable_components_eight.style.display = "inline-flex";
  //changing the other tabs to their defaults...
  tabThree.style.color = defaultColor;
  tabThree.style.borderBottom = defaultBorder;

  tabTwo.style.color = defaultColor;
  tabTwo.style.borderBottom = defaultBorder;

  tabFour.style.color = defaultColor;
  tabFour.style.borderBottom = defaultBorder;
  
  tabOne.style.color = defaultColor;
  tabOne.style.borderBottom = defaultBorder;

  tabFive.style.color = defaultColor;
  tabFive.style.borderBottom = defaultBorder;
  
  tabSeven.style.color = defaultColor;
  tabSeven.style.borderBottom = defaultBorder;

  tabSix.style.color = defaultColor;
  tabSix.style.borderBottom = defaultBorder;
  
  tabNine.style.color = defaultColor;
  tabNine.style.borderBottom = defaultBorder;
  //Hiding the others...
  switchable_components_three.style.display = "none";
  switchable_components_two.style.display = "none";
  switchable_components_one.style.display = "none";
  switchable_components_four.style.display = "none";
  switchable_components_five.style.display = "none";
  switchable_components_seven.style.display = "none";
  switchable_components_six.style.display = "none";
switchable_components_nine.style.display = "none";
}

function ninthTab() {

  tabNine.style.color = "hsl(229, 31%, 21%)";
  tabNine.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
  switchable_components_nine.style.display = "inline-flex";
  //changing the other tabs to their defaults...
  tabThree.style.color = defaultColor;
  tabThree.style.borderBottom = defaultBorder;

  tabTwo.style.color = defaultColor;
  tabTwo.style.borderBottom = defaultBorder;

  tabFour.style.color = defaultColor;
  tabFour.style.borderBottom = defaultBorder;
  
  tabOne.style.color = defaultColor;
  tabOne.style.borderBottom = defaultBorder;

  tabSix.style.color = defaultColor;
  tabSix.style.borderBottom = defaultBorder;
  
  tabFive.style.color = defaultColor;
  tabFive.style.borderBottom = defaultBorder;

  tabSeven.style.color = defaultColor;
  tabSeven.style.borderBottom = defaultBorder;
  
  tabEight.style.color = defaultColor;
  tabEight.style.borderBottom = defaultBorder;
  //Hiding the others...
switchable_components_three.style.display = "none";
switchable_components_two.style.display = "none";
switchable_components_one.style.display = "none";
switchable_components_four.style.display = "none";
switchable_components_five.style.display = "none";
switchable_components_six.style.display = "none";
switchable_components_seven.style.display = "none";
switchable_components_eight.style.display = "none";
}

