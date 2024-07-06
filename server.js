// server.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database: 'login_system'
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL');
});

// Middleware
app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serve arquivos estáticos (HTML, CSS, JS)

// Rota de login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({ success: false, message: 'Email e senha são obrigatórios' });
    }

    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], async (err, results) => {
        if (err) {
            return res.json({ success: false, message: 'Erro no servidor' });
        }

        if (results.length === 0) {
            return res.json({ success: false, message: 'Usuário não encontrado' });
        }

        const user = results[0];

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            res.json({ success: true });
        } else {
            res.json({ success: false, message: 'Senha incorreta' });
        }
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
