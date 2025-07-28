const express = require('express');
const cors = require('cors');
const jsonServer = require('json-server');

const app = express();
const router = jsonServer.router('db.json');

app.use(cors()); // ✅ habilita CORS para todas las rutas
app.use('/api', router); // expone tus datos en /api/emojis

const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Servidor json-server corriendo en http://localhost:${PORT}/api`);
});
