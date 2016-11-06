'use strict';

var wiki = require('wikijs').default();
var jsonfile = require('jsonfile');

wiki.random(100).then((data) => {
  let i;
  let requests = [];

  for (i = 0; i < data.length; i++) {
    requests.push(
      wiki.page(data[i])
        .then(page => page.content())
        .then(content => {
          content = content.split("\n");
          content = content.filter(item => {
            return item.length > 100 && item.indexOf('=') === -1 && item.indexOf('(') === -1 && item.indexOf('/') === -1;
          })
          content = content.join("\n\n");

          if (content.split(' ').length > 100) {
            return content;
          }
        })
      );
  }

  Promise.all(requests).then(values => {
    let i;
    let quotes = [];
    let file = './static/lang.json';

    for (i = 0; i < values.length; i++) {
      if (values[i]) {
        quotes.push(values[i]);
      }
    }

    jsonfile.writeFile(file, quotes, function (err) {
      if (err) {
        console.error(err);
      }
    })

  });

});
