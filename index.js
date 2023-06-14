var val1 = 0;
var val2 = 0;
 
val1 = (1+Math.floor(Math.random()*6));
val2 = (1+Math.floor(Math.random()*6));
 
document.querySelector(".img1").setAttribute("src","images/dice"+val1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+val2+".png");
 
if(val1>val2)
{
  document.querySelector("h1").innerText="🚩Player 1 Wins!";
}
else if(val2>val1)
{
  document.querySelector("h1").innerText="Player 2 Wins!🚩";
}
else{
  document.querySelector("h1").innerText="Draw!";
}