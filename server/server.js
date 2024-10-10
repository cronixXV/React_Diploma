import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.VITE_PORT;
const USER = process.env.VITE_USER_GMAIL;
const PASSOWORD = process.env.VITE_PASSWORD_GMAIL;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Сервер работает!');
});

app.post('/api/send-email', (req, res) => {
  const { name, email, description, contactMethod } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: USER,
      pass: PASSOWORD,
    },
  });

  const mailOptions = {
    from: 'email',
    to: 'egruzdev14@gmail.com',
    subject: 'New message from  feedback form',
    text: `Name: ${name}\nEmail: ${email}\nDescription: ${description}\nContact method: ${contactMethod}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Сообщение отправлено: ' + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
