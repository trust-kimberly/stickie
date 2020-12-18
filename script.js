// wraps my code
window.onload = function(){ 


// collect all the divs
var divs = document.getElementsByClassName('draggable');
// get max width and height

// var winWidth = window.innerWidth;
// var winHeight = window.innerHeight;

var box = document.querySelector('.container');
var maxWidth = box.clientWidth - 350;
console.log("max width: " + maxWidth);
var maxHeight = box.clientHeight - 200;
console.log("max height: " + maxHeight);

// iterates through each div
for ( var i=0; i < divs.length; i++ ) {
 	
    // the current div in the list
    var thisDiv = divs[i];
    console.log("div: " + i);
    
    var posx = Math.round(Math.random() * maxWidth);
    console.log("posx: " + posx);
    var posy = Math.round(Math.random() * maxHeight);
    console.log("posy: " + posy);

    // update top and left position
    thisDiv.style.left = posx +"px";
    thisDiv.style.top = posy +"px";
    
}


// jquery draggable
$( function() {
    $( ".draggable" ).draggable({ stack: ".draggable" });
  } );

// smooth drop down
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

  
  
};