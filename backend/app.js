require('dotenv').config()

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const UserRouter = require('./routes/user');

const VideoRouter = require('./routes/video');

global.rootAppPath = path.resolve(__dirname);

app.use(bodyParser.json())
app.use(cors('*'));

app.use('/api/users', UserRouter);
app.use('/api/videos', VideoRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('public'));
  app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`))
  app.get('/api/health', (req, res) => res.send({status: 'ok'}))
}

app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
});