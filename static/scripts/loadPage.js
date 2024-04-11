loginBtn = document.querySelector("#login_btn");
video = document.querySelector("#video");
loginBtn.addEventListener("click", () => {
  video.hidden = false;
  loginBtn.style.display = "none";
});
