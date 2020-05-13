const sharp = require('sharp')

const rotate = (cb) => sharp('large.jpeg')
  .rotate(90)
  .toFile('rotate_large.jpeg', cb)

module.exports = rotate
