import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:7575/api', // Insira a URL da sua API Node.js aqui
  timeout: 10000, // Insira o tempo máximo de espera para a resposta da API
  headers: {
    'Content-Type': 'application/json', // O tipo de conteúdo que a API espera receber
  },
});

export default api;