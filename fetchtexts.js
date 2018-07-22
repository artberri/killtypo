'use strict'

var wikijs = require('wikijs').default
var jsonfile = require('jsonfile')
var wikis = [
  {
    lang: 'en',
    obj: wikijs({
      apiUrl: 'http://en.wikipedia.org/w/api.php'
    })
  },
  {
    lang: 'es',
    obj: wikijs({
      apiUrl: 'http://es.wikipedia.org/w/api.php'
    })
  }
]

for (let j = 0; j < wikis.length; j++) {
  let wiki = wikis[j].obj
  let lang = wikis[j].lang

  wiki.random(200).then((data) => {
    let i
    let requests = []

    for (i = 0; i < data.length; i++) {
      requests.push(
        wiki.page(data[i])
          .then(page => page.content())
          .then(content => {
            content = content.split('\n')
            content = content.filter(item => {
              return item.length > 100 && item.indexOf('=') === -1 && item.indexOf('(') === -1 && item.indexOf('/') === -1
            })
            content = content.join('\n\n')

            if (content.split(' ').length > 100) {
              return content
            }
          })
      )
    }

    Promise.all(requests).then(values => {
      let i
      let quotes = []
      let file = './src/quotes/' + lang + '.json'

      for (i = 0; i < values.length; i++) {
        if (values[i]) {
          quotes.push(values[i])
        }
      }

      jsonfile.writeFile(file, quotes, function (err) {
        if (err) {
          console.error(err)
        }
      })

      console.log(lang)
    })
  })
}
