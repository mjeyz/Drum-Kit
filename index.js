var NumberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < NumberOfDrumButtons; i++) {     

document.querySelectorAll("button")[i].addEventListener("click", function () {
var snd = new Audio("sounds/tom-1.mp3");
snd.play();

});
}