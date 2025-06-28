//!intervalId and intervalId == null this is same

const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const startChingingColor = () => {
  if (!intervalId) {
    intervalId = setInterval(changeBGcolor, 200);
  }
  function changeBGcolor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChingingColor = () => {
  clearInterval(intervalId);
  intervalId = null;
};
document.querySelector("#start").addEventListener("click", startChingingColor);

document.querySelector("#stop").addEventListener("click", stopChingingColor);
