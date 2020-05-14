const sharp = require('sharp')

const rotate = () => new Promise((resolve, reject) => {
  sharp('large.jpeg')
    .rotate(90)
    .toFile('rotate_large.jpeg', (err, info) => {
      if (err) reject(err)
      resolve(info)
    })
})

const resize = (width, height) => new Promise((resolve, reject) => {
  sharp('large.jpeg')
    .resize({ width, height })
    .toFile(`resize_${width}x${height}.jpeg`, (err, info) => {
      if (err) reject(err)
      resolve(info)
    })
})

module.exports = { rotate, resize }
