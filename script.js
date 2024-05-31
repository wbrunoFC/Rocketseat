function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");
  switchImg();
}

function switchImg() {
  let img = document.querySelector("#profile > img");

  const switchImg = {
    imgLight: "./assets/avatar-light.png",
    imgDark: "./assets/avatar.png",
  };

  if (document.documentElement.classList.contains("light")) {
    img.setAttribute("src", switchImg.imgLight);
  } else {
    img.setAttribute("src", switchImg.imgDark);
  }
}
