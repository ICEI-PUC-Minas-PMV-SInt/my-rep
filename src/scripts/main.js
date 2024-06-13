if (window.location.href.includes('account.html')) {
  if (localStorage.getItem('loggedInUser') == null) {
    alert('Você precisa estar logado para acessar essa página');
    window.location.href = './login.html';
  }
}

function cadastrarUsuario(event) {
  event.preventDefault();
  const nome = document.querySelector('#nome').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const confirmaPassword = document.querySelector('#confirmPassword').value;

  if (email && password && confirmaPassword) {
    if (password === confirmaPassword) {
      const user = { nome: nome, email: email, password: password };
      localStorage.setItem(email, JSON.stringify(user));
      alert('Usuário cadastrado com sucesso!');
      window.location.href = './login.html';
    } else {
      alert('As senhas não coincidem. Por favor, tente novamente.');
    }
  } else {
    alert('Por favor, preencha todos os campos!');
  }
}

function loginUsuario(event) {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const storedUser = JSON.parse(localStorage.getItem(email));

  if (storedUser && storedUser.password === password) {
    alert('Login realizado com sucesso!');
    localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
    window.location.href = './account.html';
  } else {
    alert('E-mail ou senha incorretos!');
  }
}

function mostrarNomeUsuario() {
  const userName = document.querySelector('.user');
  const userEmail = document.querySelector('.user-email');
  const userNameDisplay = document.querySelector('#user');
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  if (userNameDisplay && loggedInUser) {
    userNameDisplay.innerText = loggedInUser.nome;
    userName.innerText = loggedInUser.nome;
    userEmail.innerText = loggedInUser.email;
  }
}

function logoutUsuario() {
  localStorage.removeItem('loggedInUser');
  window.location.href = './login.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const formCadastro = document.querySelector('#formCadastro');
  const formLogin = document.querySelector('#formLogin');
  const btnSair = document.querySelector('#sair');

  if (formCadastro) {
    formCadastro.addEventListener('submit', cadastrarUsuario);
  }

  if (formLogin) {
    formLogin.addEventListener('submit', loginUsuario);
  }
  if (btnSair) {
    btnSair.addEventListener('click', logoutUsuario);
  }

  mostrarNomeUsuario();
});
