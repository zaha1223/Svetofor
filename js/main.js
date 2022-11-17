const elRedLight = document.getElementsByTagName("span")[0];
const elYellowLight = document.getElementsByTagName("span")[1];
const elGreenLight = document.getElementsByTagName("span")[2];

// const elRedBtn = document.querySelector("#red-btn");
// const elYellowBtn = document.querySelector("#yellow-btn");
// const elGreenBtn = document.querySelector("#green-btn");
// const elDelbtn = document.querySelector(".del-btn");

// elRedBtn.addEventListener("click", () => {
//   elRedLight.classList.toggle("red");
//   elYellowLight.classList.remove("yellow");
// });
// elYellowBtn.addEventListener("click", () => {
//   elYellowLight.classList.toggle("yellow");
//   elRedLight.classList.remove("red");
//   elGreenLight.classList.remove("green");
// });
// elGreenBtn.addEventListener("click", () => {
//   elGreenLight.classList.toggle("green");
//   elYellowLight.classList.remove("yellow");
//   elRedLight.classList.remove("red");
// });
// elDelbtn.addEventListener("click", () => {
//   elGreenLight.classList.remove("green");
//   elRedLight.classList.remove("red");
//   elYellowLight.classList.remove("yellow");
// });

const el = document.querySelectorAll(".traffic-light");

let count = 0;

setInterval(() => {
  if(count <= 5){
    elGreenLight.classList.remove("green");
    elRedLight.classList.add("red");
  }
  else if(count > 5 && count <= 8){
    elRedLight.classList.remove('red');
    elYellowLight.classList.add("yellow");
  }else if(count > 8 && count <= 13){
    elYellowLight.classList.remove("yellow");
    elGreenLight.classList.add("green")
    if(count == 13){
      count = 0;

    }
  }
  count += 1;
},1000)
