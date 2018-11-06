const express = require('express')
const server = express();
const fs = require('fs');
const path = require('path');
const bundle = require('./dist/server.bundle.js');
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./index.html', 'utf-8')
});

server.use('/dist', express.static(path.join(__dirname, './dist')));

server.get('*', (req, res) => {
  bundle.default({url: req.url}).then((app) => {
    const context = {
      title: 'Vue Exp',
      meta: `<meta description="vuejs server side renderer">`
    };
    renderer.renderToString(app, context, (err, html) => {
      if (err) {
        if (err.code == 404) {
          res.status(404).end('Page not fount');
        } else {
          res.status(500).end('Internal Server Error');
        }
      } else {
        res.end(html);
      }
    });
  }, (err) => {
    if (err.code == 404) {
      res.status(404).end('Page not fount -- vue-router');
    } else {
      res.status(500).end('Internal Server Error -- vue-router');
    }
  })
});

server.listen(8080);