const mailgun = require('mailgun-js');

const client = mailgun({
  apiKey: process.env.MAILGUN_KEY,
  domain: process.env.MAILGUN_DOMAIN
});

const emailDataTemplate = {
  from: 'Não responder Onda Dura Jaraguá do Sul <naoresponder@ondadurajaraguadosul.com.br>',
  to: '',
  subject: 'Link Familiarizando | Onda Dura Jaraguá do Sul - SC',
  text: ''
}

const sendEmail = (emailData) => {
  return client.messages().send(emailData, (err, body) => {
    console.log(body);
  });
}

module.exports = {
  sendEmail,
  emailDataTemplate
}


