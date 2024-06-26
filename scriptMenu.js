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

    let users = JSON.parse(localStorage.getItem('users')) || {}; // Armazena usuários cadastrados
    let currentUser = localStorage.getItem('currentUser'); // Usuário logado

    function updateUI() {
        if (currentUser) {
            loginContainer.style.display = 'none';
            mainContent.style.display = 'block';
            userNameDisplay.textContent = currentUser;
        } else {
            loginContainer.style.display = 'flex';
            mainContent.style.display = 'none';
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
            alert('Invalid credentials');
        }
    });

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        if (users[username]) {
            alert('Username already exists');
        } else {
            users[username] = password;
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful');
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
