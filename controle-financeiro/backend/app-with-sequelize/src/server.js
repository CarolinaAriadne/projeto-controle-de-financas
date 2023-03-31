const app = require('./api');
require('dotenv').config();

const PORT = process.env.API_PORT || 3301;


app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
