const express = require('express');
const app = express();
const port = 3000;

const oembed = require('oembed-parser');

app.get('/', (req, res) => {
  //   const url = 'https://www.youtube.com/watch?v=dBD54EZIrZo';
  //   const url = 'https://www.instagram.com/p/BUawPlPF_Rx/'
  //   const url = 'https://twitter.com/hellopolicy/status/867177144815804416';
  const url = 'https://vimeo.com/20097015';
  oembed
    .extract(url)
    .then((oembed) => {
      console.log(oembed);
    })
    .catch((err) => {
      console.trace(err);
    });
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
