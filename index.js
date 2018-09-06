const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('This is the server')
}); // this is the route handler. I need to learn this section and commit it to memory

app.listen(5000, () => console.log('Hi Jack'));
