const express = require('express');
const Pusher = require('pusher');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Configurações do Pusher
const pusher = new Pusher({
  appId: '1890632',
  key: 'dd78661dc83711748d87',
  secret: 'a73048f56a0c5a4fb02c',
  cluster: 'us2',
  useTLS: true
});

// Endpoint para enviar notificações
app.post('/send-notification', (req, res) => {
    const { title, message } = req.body;
  
    pusher.trigger('my-channel', 'my-event', {
      title: title,
      message: message
    });
  
    res.status(200).send('Notificação enviada!');
  });
  

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
