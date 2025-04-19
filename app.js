const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require('morgan');
const axios = require('axios');

// Define a simple route that returns 200 status code
app.use(morgan('dev'));
app.use(express.json());

app.get('/whatsapp', (req, res) => {
  console.log("GET /whatsapp req.query", JSON.stringify(req.query));
  console.log("GET /whatsapp req.body", JSON.stringify(req.body));
  console.log("GET /whatsapp req.headers", JSON.stringify(req.headers) + "\n\n");
  res.status(200).send({ status: 'ok' });
});

app.post('/whatsapp', async (req, res) => {
  console.log("POST /whatsapp req.body", JSON.stringify(req.body));
  console.log("POST /whatsapp req.query", JSON.stringify(req.query));
  console.log("POST /whatsapp req.headers", JSON.stringify(req.headers) + "\n\n");
  
  try {
    // Call Infobip WhatsApp API
    // const response = await axios.post(
    //   'https://xk8x2q.api.infobip.com/whatsapp/1/message/text',
    //   {
    //     from: "12317510069",
    //     to: "919718448764",
    //     messageId: "test-message-" + Date.now(),
    //     content: {
    //       text: "Message received: " + Hey there testing text message
    //     },
    //     callbackData: "Callback data"
    //   },
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': 'App 2acf62b89a983af1a5ced84aac341778-98144502-996b-41fc-81af-9732f03d8d04'
    //     }
    //   }
    // );
    
    // console.log('Infobip API response:', response.data);
    res.status(200).send({ status: 'ok' });
  } catch (error) {
    console.error('Error calling Infobip API:', error.message);
    res.status(200).send({ status: 'ok', error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 