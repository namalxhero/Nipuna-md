
function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function displayImage(input) {
  const preview = document.getElementById("imagePreview");
  preview.innerHTML = "";

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      preview.appendChild(img);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function checkLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const correctUsername = "nipuna-md";
  const correctPassword = "nipuna";

  if (username === correctUsername && password === correctPassword) {
    alert("Login successful!");
  } else {
    alert("Invalid username or password.");
  }
}
