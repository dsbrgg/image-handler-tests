const sharp = require('sharp')

const rotate = () => new Promise((resolve, reject) => {
  sharp('large.jpeg')
    .rotate(90)
    .toFile('rotate_large.jpeg', (err, info) => {
      if (err) reject(err)
      resolve(info)
    })
})

module.exports = rotate
