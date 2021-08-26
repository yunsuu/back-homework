const express = require('express');
const app = express();
const port = 3000;

const oembed = require('oembed-parser');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('main');
});

app.get('/search', function (req, res) {
  const url = req.query.url;
  oembed
    .extract(url)
    .then((oembed) => {
      res.render('search', { obj: oembed });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
