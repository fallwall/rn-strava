const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoUri = 'mongodb+srv://rnstrava:passwordpassword@cluster0-m4snj.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('connected to mongo instance');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to mongo instance', err);
});


app.get('/', (req, res) => {
  res.send('hi hi hi!');
});

app.listen(3000, () => {
  console.log(`Listening on port 3000!`);
});