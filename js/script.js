var randomNumber1 = Math.floor(Math.random()*6)+1
var randomNumber2 = Math.floor(Math.random()*6)+1

var firstImage = "images/dice"+randomNumber1+".png";
var secondImage = "images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",firstImage);
document.querySelector(".img2").setAttribute("src",secondImage);

var first = "Player ";
var second = " Wins!";
var third = "Draw!"
if(randomNumber1>randomNumber2){
    var ans = first+"1"+second;   
}
else if(randomNumber1<randomNumber2){
    var ans = first+"2"+second;
}
else{
    var ans = third;
}
document.querySelector("h1").innerHTML = ans;

