document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('open_btn');
    const loginContainer = document.getElementById('auth_container');
    const mainContent = document.getElementById('main_content');
    const loginForm = document.getElementById('login');
    const registerForm = document.getElementById('register');
    const userNameDisplay = document.getElementById('user_name');
    const showRegisterLink = document.getElementById('show_register');
    const showLoginLink = document.getElementById('show_login');
    const infoSection = document.querySelector('.info');

    let users = JSON.parse(localStorage.getItem('users')) || {}; // Armazena usuários cadastrados
    let currentUser = localStorage.getItem('currentUser'); // Usuário logado

    function updateUI() {
        if (currentUser) {
            loginContainer.style.display = 'none';
            mainContent.style.display = 'block';
            userNameDisplay.textContent = currentUser;
            infoSection.style.display = 'block'; // Mostra o elemento .info
        } else {
            loginContainer.style.display = 'flex';
            mainContent.style.display = 'none';
            infoSection.style.display = 'none'; // Esconde o elemento .info
        }
    }

    openBtn.addEventListener('click', function () {
        sidebar.classList.toggle('open-sidebar');
    });

    showRegisterLink.addEventListener('click', function () {
        document.getElementById('login_form').style.display = 'none';
        document.getElementById('register_form').style.display = 'block';
    });

    showLoginLink.addEventListener('click', function () {
        document.getElementById('register_form').style.display = 'none';
        document.getElementById('login_form').style.display = 'block';
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        // Verificação de login
        if (users[username] && users[username] === password) {
            currentUser = username;
            localStorage.setItem('currentUser', currentUser);
            updateUI();
        } else {
            alert('Credenciais inválidas');
        }
    });

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        if (users[username]) {
            alert('Nome de usuário já existe');
        } else {
            users[username] = password;
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registro bem-sucedido');
            document.getElementById('register_form').style.display = 'none';
            document.getElementById('login_form').style.display = 'block';
        }
    });

    document.getElementById('logout_btn').addEventListener('click', function () {
        currentUser = null;
        localStorage.removeItem('currentUser');
        updateUI();
    });

    updateUI();
});

document.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});
