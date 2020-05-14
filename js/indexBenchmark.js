const rotate = require('./index')
const { Benchmark } = require('benchmark')

const suite = new Benchmark.Suite()

suite
  .add('rotate', {
    defer: true,
    fn: async function (deferred) {
      for (let i = 0; i <= 100; i++) {
        await rotate()
      }

      deferred.resolve()
    }
  })
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .on('complete', function () {
    // console.log(this[0].stats)
  })

suite.run()
