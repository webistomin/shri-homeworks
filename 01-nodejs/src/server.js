const express = require('express');
const showBanner = require('node-banner');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  showBanner('SHRI 2019', 'Simple node.js git client. Server available on localhost:3000');
});
