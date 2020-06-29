


var randomNo1 = Math.floor(Math.random() * 6) + 1; //random 1-6

var randomDiceImage = "dice" + randomNo1 + ".png"; // dice1.png-6

var randomImageSource = "images/" + randomDiceImage; //image source dice 1-6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNo2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNo2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNo1 > randomNo2){
	document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNo1 == randomNo2){
	document.querySelector("h1").innerHTML = "Draw!";
}
else{
	document.querySelector("h1").innerHTML = "Player 2 Wins!";
}



// console.log(player1, player2);

//update dice
// document.getElementById('player1').src = 'images/dice' + player1 +'.png';
// document.querySelector('#player2').src = 'images/dice' + player2 +'.png';

