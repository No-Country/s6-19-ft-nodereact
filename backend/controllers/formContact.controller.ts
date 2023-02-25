import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';



const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_SECRET,
    pass: process.env.GOOGLE_SECRET,
  },
});

const sendContact = (emailTo, emailFrom, message, userName,name) => {
  let params = {
    Destination: {
      ToAddresses: [emailTo]
    },
    Message: {
      Body: {
        Text: { Data: "Desde formulario de contacto " + name + "\n " + message }
      },
      Subject: { Data: "Desde: " + emailFrom }
    },
  };
}

export { transporter,sendContact}