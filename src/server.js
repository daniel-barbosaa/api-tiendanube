const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000; 
app.use(cors());

app.get('/api/products', async (req, res) => {
    try {
      const { data } = await axios.get('https://api.tiendanube.com/v1/4170364/products', {
        headers: {
          'Authentication': 'bearer 7a3f6caf7fca79214cd2dea31c152aa7e57cce76',
        //   'User-Agent': 'E-commerce (danimendes9728@gmail.com)',
        },
      });
  
      res.json(data);
    } catch (error) {
      console.error('Erro na solicitação para a API do Nuvemshop:', error.message);
      res.status(500).json({ error: 'Erro ao obter produtos da API do Nuvemshop' });
    }
  });

app.listen(port, () => {
  console.log('Servidor backend iniciado na porta 3000');
});