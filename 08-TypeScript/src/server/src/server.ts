const express = require('express');
const cors = require('cors');
const showBanner = require('node-banner');
const router = require('./routes');

const application = express();
app.use(cors());
app.use(express.json());
app.use(router);

// app.listen(8080, () => {
//   showBanner('SHRI 2019', 'Simple node.js git client. Server available on localhost:8080');
// });

module.exports = application;
