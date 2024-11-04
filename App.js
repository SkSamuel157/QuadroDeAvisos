import Pusher from 'pusher-js/react-native';
import axios from 'axios';

// Substitua com suas credenciais do Pusher
const pusher = new Pusher('dd78661dc83711748d87', {
  cluster: 'us2'
});

const enviarNotificacao = (mensagem) => {
  axios.post('http://172.23.224.1:5000/send-notification', {
    message: mensagem,
  })
  .then(response => console.log(response.data))
  .catch(error => console.error('Erro ao enviar notificação:', error));
};



export default enviarNotificacao;
