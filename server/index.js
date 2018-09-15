const express = require('express');
const app = express();
app.use('/', express.static('build'))
app.listen(9091, () => console.log('Example app listening on port 9091!'))
