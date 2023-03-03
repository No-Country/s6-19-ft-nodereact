import { createTransport } from 'nodemailer';

const TEST_MAIL = 'diegosilvacordoba4@gmail.com';

const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'diegosilvacordoba4@gmail.com',
        pass: 'xiiphbmrkabtelpp'
    }
});

const mailOptions = {
  from: 'Servidor Node.js',
  to: TEST_MAIL,
  subject: 'Contenido prueba gmail'
};


try {
  const info = await transporter.sendMail(mailOptions);
  console.log(info);
} catch (error)
{
  console.log(error);
}
