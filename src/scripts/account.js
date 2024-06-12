document.addEventListener("DOMContentLoaded", function () {
  const userEmailElement = document.getElementById("email");
  const registeredUser = JSON.parse(
    localStorage.getItem("@myRep:registeredUser")
  );

  if (registeredUser && registeredUser.email) {
    userEmailElement.textContent = registeredUser.email;
  } else {
    userEmailElement.textContent = "Usuário não logado";
  }
});
