// addUser.js
const mysql = require('mysql');
const bcrypt = require('bcrypt');

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

const email = 'user@example.com';
const password = 'password123';

bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
        console.error('Erro ao hashear a senha:', err);
        return;
    }

    const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
    db.query(query, [email, hash], (err, results) => {
        if (err) {
            console.error('Erro ao inserir usuário:', err);
            return;
        }
        console.log('Usuário inserido com sucesso:', results);
        db.end();
    });
});
