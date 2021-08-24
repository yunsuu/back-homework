const express = require('express');
const app = express();
const port = 3000;

const oembed = require('oembed-parser');

app.set('view engine', 'ejs'); // 1
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
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
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
