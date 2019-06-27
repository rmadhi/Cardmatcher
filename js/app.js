/*The ARRAY LIST OF IMAGES IS IN THE data.JS File */
try {


/*the function creates the duplicate of the each element in the array*/
var mainGrid = cardsArray.concat(cardsArray).sort(function () {
    return 0.5 - Math.random();
  });
}
catch {
  alert ("elements in the array are empty put some data");
}

try {


  var firstSlct = '';
  var secondSlct = '';
  var count = 0;
  var lastTrgt = null;
  var delay = 800;
  
  
  
  var game = document.getElementById('game');
  var grid = document.createElement('section');
  grid.setAttribute('class', 'grid');
  game.appendChild(grid);
  
  mainGrid.forEach(function (item) {
    var name = item.name,
        img = item.img;
  
  /*creatinga nd appeding the cards with DOM in the game board */
    var card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = name;
  grid.appendChild(card);
    var front = document.createElement('div');
    front.classList.add('front');
  card.appendChild(front);
    var back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = 'url(' + img + ')';
  
    card.appendChild(back);
  });
}
catch{
  alert ("Unable to create the div elements of cards")
}
try{


  /* Start of th game on load */
  document.body.onload = startGame();
}
catch{
  alert (" unable to start the game function ");
}
  function startGame()
  {
  
  var match = function match() {
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
      card.classList.add('match');
     
    });
  };
  /*declearing the reset values for  selected list */
  var resetSlct = function resetSlct() {
    firstSlct = '';
    secondSlct = '';
    count = 0;
    lastTrgt = null;
  
    
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
      card.classList.remove('selected');
    });
    
  };
  
  /*selection of the cards based on the event click */
  

  
  grid.addEventListener('click', function  (event) {
  
    var clicked = event.target;
  
    if (clicked.nodeName === 'SECTION' || clicked === lastTrgt || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
      return;
    }
    
  /*resetting the counter after each count value is 2*/
    if (count < 2) {
      count++;
      if (count === 1) {
        
        firstSlct = clicked.parentNode.dataset.name;
        console.log(firstSlct);
        clicked.parentNode.classList.add('selected');
      } else {
        secondSlct = clicked.parentNode.dataset.name;
        console.log(secondSlct);
        clicked.parentNode.classList.add('selected');
      }
      console.log(count);
      if (firstSlct && secondSlct) {
        if (firstSlct === secondSlct) {
          setTimeout(match, delay);
        
        }
        
        setTimeout(resetSlct, delay); /*delay the selected card*/
      
        lastTrgt = clicked;
      
       }
          
      }
  
  
      
      /*to determine the timer function */
      var timer = document.querySelector(".timer");
      timer.innerHTML = "0 mins 0 secs";
    
    
  });
  
  }
  startTimer();
  
  
  /* initialising the timer function */
  var second = 0, minute = 0 , hour = 0;
  var timer = document.querySelector(".timer");
  var interval;
  function startTimer(){
      interval = setInterval(function(){
          timer.innerHTML = minute+"mins "+second+"secs";
          second++;
          if(second == 60){
              minute++;
              second=0;
          }
          if(minute == 60){
              hour++;
              minute = 0;
          }
          
      },1000);
     
    };
  

    
    
  
   
   