document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    // Obter os valores dos campos de email e senha
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    // Verificar se o email e a senha são válidos
    if (email === 'aluno@aluno.com' && senha === 'aluno123') {
        // Login bem-sucedido
        alert('Login realizado com sucesso!');
        window.location.href = 'index.html'; // Redirecionar para a página inicial
    } else {
        // Login inválido
        alert('Email ou senha incorretos. Tente novamente.');
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'aluno@aluno.com' && password === 'aluno123') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});
