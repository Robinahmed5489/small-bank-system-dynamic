document.getElementById("btn-submit").addEventListener("click", function () {
  const emailfield = document.getElementById("user-email");
  const emaildBoxData = emailfield.value;
  const passwordField = document.getElementById("user-password");
  const passwordBoxData = passwordField.value;
  if (emaildBoxData == "robsak5489@gmail.com" && passwordBoxData == 123456) {
    window.location.href = "bank.html";
  } else {
    alert("tui moira ja haira nati");
  }
});
