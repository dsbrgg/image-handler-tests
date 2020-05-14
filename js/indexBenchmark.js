// https://stackoverflow.com/questions/31624055/benchmark-asynchronous-code-benchmark-js-node-js

const { Benchmark } = require('benchmark')
const { rotate, resize } = require('./index')

const suite = new Benchmark.Suite()
const onCycle = event => { console.log(String(event.target)) }
const onComplete = function () {
  console.log(this[0].name, this[0].stats)
}

suite
  .add('rotate [100x]', {
    defer: true,
    fn: async function (deferred) {
      for (let i = 0; i <= 100; i++) {
        await rotate()
      }

      deferred.resolve()
    }
  })

suite
  .add('resize [100x]', {
    defer: true,
    fn: async function (deferred) {
      for (let i = 0; i <= 100; i++) {
        await resize(500, 500)
      }

      deferred.resolve()
    }
  })

suite
  .on('cycle', onCycle)
  .on('complete', onComplete)
  .run()
