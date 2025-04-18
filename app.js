const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define a simple route that returns 200 status code
app.get('/whatsapp', (req, res) => {
  res.status(200).send({ status: 'ok' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 