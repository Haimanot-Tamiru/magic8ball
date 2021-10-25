const button = document.getElementById("button");
const input = document.getElementById("input");
const resetBall = document.getElementById("reset");
const responses = ["magic8ball_1.png ","magic8ball_2.png", "magic8ball_3.png","magic8ball_4.png","magic8ball_5.png","magic8ball_6.png","magic8ball_7.png","magic8ball_8.png","magic8ball_9.png","magic8ball_10.png","magic8ball_11.png","magic8ball_12.png","magic8ball_13.png","magic8ball_14.png","magic8ball_15.png",
];
// console.log(responses.length);
resetBall.addEventListener("click",reset)
button.addEventListener("click", ask);

function ask() {
  if (input.value) {
    const randomBall = Math.floor(Math.random() * responses.length);
    // console.log(randomBall); // it is returns the index of images
    const ans = responses[randomBall];
    // console.log(ans);
    document.getElementById("image").src = `./magic/${ans}`;
  } else {
    alert("what is your question?");  
  }   
  input.value = ""; //Clear the input field when you click on the button:
}
function reset() {
  document.getElementById("image").src=" ";
}