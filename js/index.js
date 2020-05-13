const sharp = require('sharp')

sharp('large.jpeg')
  .rotate(90)
  .toFile('rotate_large.jpeg', (err, info) => {
    console.log(err, info)
  })
