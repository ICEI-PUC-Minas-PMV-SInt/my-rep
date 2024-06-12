document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (password !== confirmPassword) {
        return alert("As senhas não coincidem!");
      }

      const registeredUser = {
        name: name,
        email: email,
        password: password,
      };

      localStorage.setItem(
        "@myRep:registeredUser",
        JSON.stringify(registeredUser)
      );

      alert("Cadastro realizado com sucesso!");

      registerForm.reset();
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const registeredUser = JSON.parse(
        localStorage.getItem("@myRep:registeredUser")
      );

      if (
        registeredUser &&
        registeredUser.email === email &&
        registeredUser.password === password
      ) {
        alert("Login realizado com sucesso!");
        window.location.href = "./account.html";
      } else {
        alert("Email ou senha incorretos!");
      }
    });
  }
});
