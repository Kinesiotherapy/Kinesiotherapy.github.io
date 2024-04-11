loginBtn = document.querySelector("#login_btn");
passwordField = document.querySelector("#password_field");
video = document.querySelector("#video");

function clearPassword() {
  passwordField.value = "";
}

loginBtn.addEventListener("click", async function (e) {
  e.preventDefault();
  console.log();
  const encryptPassword = await checkPassword(passwordField.value);
  if (
    encryptPassword ===
    "ca278328460680ce24b6a3ee5b4ed332e4dd02ae2746a61a179e0831ac506af9"
  ) {
    video.hidden = false;
    loginBtn.style.display = "none";
    passwordField.style.display = "none";
    clearPassword();
  }
});

async function sha256(message) {
  // encode as UTF-8
  const msgBuffer = new TextEncoder().encode(message);

  // hash the message
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);

  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // convert bytes to hex string
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

async function checkPassword(message) {
  const response = await sha256(message);
  console.log(response);
  return response;
}
