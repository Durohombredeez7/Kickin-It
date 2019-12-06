// declare the players and goalie for later on use
let kicker = []
let goalie = [] 
 
// setup positions for ball and keeper
 const shotPlacement = ["one", "two", "four", "five"];

 const keeperPosition = ["one", "two", "four", "five"];

// try console.log(shotPlacement[3]); to see if console is up

//  get game to start once the button is clicked
// element.querySelector('.start') or $('.start').onClick(function() {
//   console.log("game has started!")
// }) document.querySelectorAll
let start = document.querySelector('.start')
start.addEventListener('click', () => {
  console.log('Game started')
})

  for (let i = 0; i < shotPlacement.length; i++) {
    if (kicker.shotPlacement[0] === goalie.keeperPosition[0])
      console.log('Saved')
}


// setup positions for the ball



  
// set up collision between the goalie and ball to count as save

// set up random positions for goal
