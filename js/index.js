const sharp = require('sharp')

const rotate = () => new Promise((resolve, reject) => {
  sharp('large.jpeg')
    .rotate(90)
    .toFile('large_rotate.jpeg', (err, info) => {
      if (err) reject(err)
      resolve(info)
    })
})

const resize = (width, height) => new Promise((resolve, reject) => {
  sharp('large.jpeg')
    .resize({ width, height })
    .toFile(`large_${width}x${height}.jpeg`, (err, info) => {
      if (err) reject(err)
      resolve(info)
    })
})

const sharpen = (sigma, flat, jagged) => new Promise((resolve, reject) => {
  sharp('large.jpeg')
    .sharpen(sigma, flat, jagged)
    .toFile(`large_sharpened.jpeg`, (err, info) => {
      if (err) reject(err)
      resolve(info)
    })
})

const modulate = (brightness, saturation, hue) => new Promise((resolve, reject) => {
  sharp('large.jpeg')
    .modulate({
      brightness,
      saturation,
      hue
    })
    .toFile(`large_modulate.jpeg`, (err, info) => {
      if (err) reject(err)
      resolve(info)
    })
})

module.exports = { rotate, resize, sharpen, modulate }
