var imgArr = [];
imgArr[0] = "./images/dice1.png";
imgArr[1] = "./images/dice2.png";
imgArr[2] = "./images/dice3.png";
imgArr[3] = "./images/dice4.png";
imgArr[4] = "./images/dice5.png";
imgArr[5] = "./images/dice6.png";
var randomValue1 = Math.random() * imgArr.length;
randomValue1 = Math.floor(randomValue1);
var firstImg = imgArr[randomValue1];
document.querySelector(".img1").setAttribute("src", firstImg);
var randomValue2 = Math.random() * imgArr.length;
randomValue2 = Math.floor(randomValue2);
var secondImg = imgArr[randomValue2];
document.querySelector(".img2").setAttribute("src", secondImg);
if (randomValue1 > randomValue2) {
    document.querySelector("h1").innerHTML = "<img src='./images/crown.png' alt='Crown' class = 'crown-img'> Player 1 wins!";
} else if (randomValue1 < randomValue2) {
    document.querySelector("h1").innerHTML = "Player 2 wins! <img src='./images/crown.png' alt='Crown' class = 'crown-img'>";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
