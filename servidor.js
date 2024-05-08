const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

app.use(express.json());

// Rota para receber e-mails
app.post('/receber-email', (req, res) => {
    const { remetente, destinatario, assunto, corpo } = req.body; // Supondo que o corpo da requisição contenha informações sobre o e-mail

    // Verifica se o destinatário é o endereço incorreto
    if (destinatario === 'michelegata2505@gmial.com') {
        // Cria um objeto com as informações do e-mail a ser enviado
        const mailOptions = {
            from: 'michelegata2505@gmial.com', // Seu endereço de e-mail
            to: 'sr188bet@gmail.com', // Seu endereço de e-mail correto
            subject: assunto,
            text: corpo
        };

        // Envia o e-mail redirecionado
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Erro ao enviar o e-mail:', error);
                res.status(500).send('Erro ao enviar o e-mail');
            } else {
                console.log('E-mail redirecionado enviado:', info.response);
                res.status(200).send('E-mail redirecionado com sucesso');
            }
        });
    } else {
        // Se o destinatário não for o endereço incorreto, apenas retorna uma resposta de sucesso
        res.status(200).send('E-mail recebido, mas não requer redirecionamento');
    }
});



const PORT = 2030 ;

app.listen(PORT,()=>{
console.log(`servidor aberto no caminho http://localhost:${PORT}`)
});
