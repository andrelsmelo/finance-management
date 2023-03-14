const app = require('./src/app');
require('dotenv').config();

const PORT = process.env.PORT || 7575;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));