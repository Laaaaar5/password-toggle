const upi = document.querySelector("input");
const btcm = document.querySelector("button");

function showPassword() {
  if (upi.getAttribute("type") === "text") {
    upi.removeAttribute("type");
    upi.setAttribute("type", "password");
    btcm.textContent = "Show Password";
  } else {
    upi.removeAttribute("type");
    upi.setAttribute("type", "text");
    btcm.textContent = "Hide Password";
  }
}

btcm.addEventListener("click", showPassword);
