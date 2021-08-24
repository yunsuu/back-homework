const express = require('express');
const app = express();
const port = 3000;

const oembed = require('oembed-parser');

app.set('view engine', 'ejs'); // 1
app.use(express.static(__dirname + '/public'));

app.get('/main', function (req, res) {
  res.render('main', { name: '앙' });
});

app.get('/search', function (req, res) {
  const url = req.query.url;
  console.log(url);
  oembed
    .extract(url)
    .then((oembed) => {
      console.log(oembed);
      res.render('search', { obj: oembed });
    })
    .catch((err) => {
      console.trace(err);
    });
  // res.render('search', { name: req.params.nameParam });
});

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
