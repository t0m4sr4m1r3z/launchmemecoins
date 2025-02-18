const express = require('express');
const cors = require('cors');
const tokenRoutes = require('./routes/tokenRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', tokenRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});