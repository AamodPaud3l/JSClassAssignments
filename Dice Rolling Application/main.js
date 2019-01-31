window.onload = displayImage;

var random_img_array = new Array("dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png");

function displayImage() {
    var num1 = Math.floor(Math.random() * random_img_array.length);
    document.getElementById("myDie1").src = random_img_array[num1];

    var num2 = Math.floor(Math.random() * random_img_array.length);
    document.getElementById("myDie2").src = random_img_array[num2];

    if(num1 > num2){
        document.getElementById("winner").innerHTML= "Player 1 wins!";
    }
    else if(num2 > num1){
        document.getElementById("winner").innerHTML= "Player 2 wins!";
    }
    else{
        document.getElementById("winner").innerHTML= "Draw!";
    }
}
