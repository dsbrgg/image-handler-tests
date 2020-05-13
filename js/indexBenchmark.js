const rotate = require('./index')
const { Benchmark } = require('benchmark')

const suite = new Benchmark.Suite();

suite.add('rotate 100 times', function() {
  rotate((err, info) => {
    console.log('Rotated successfully')
  })
})

suite.run({ maxTime: 10 })
