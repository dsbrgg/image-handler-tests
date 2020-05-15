// https://stackoverflow.com/questions/31624055/benchmark-asynchronous-code-benchmark-js-node-js

const { Benchmark } = require('benchmark')
const {
  rotate,
  resize,
  sharpen,
  modulate,
  toPNG
} = require('./index')

const suite = new Benchmark.Suite()
const onCycle = event => { console.log(String(event.target)) }
const onComplete = function () {
  console.log(this.name, this.stats)
}

suite
  .add('rotate [100x]', {
    onCycle,
    onComplete,
    defer: true,
    fn: async function (deferred) {
      for (let i = 0; i <= 100; i++) {
        await rotate()
      }

      deferred.resolve()
    }
  })

suite
  .add('resize(300, 300) [100x]', {
    onCycle,
    onComplete,
    defer: true,
    fn: async function (deferred) {
      for (let i = 0; i <= 100; i++) {
        await resize(300, 300)
      }

      deferred.resolve()
    }
  })

suite
  .add('resize(500, 500) [100x]', {
    onCycle,
    onComplete,
    defer: true,
    fn: async function (deferred) {
      for (let i = 0; i <= 100; i++) {
        await resize(500, 500)
      }

      deferred.resolve()
    }
  })

suite
  .add('sharpen [100x]', {
    onCycle,
    onComplete,
    defer: true,
    fn: async function (deferred) {
      for (let i = 0; i <= 100; i++) {
        await sharpen(5, 5, 5)
      }

      deferred.resolve()
    }
  })

suite
  .add('modulate [100x]', {
    onCycle,
    onComplete,
    defer: true,
    fn: async function (deferred) {
      for (let i = 0; i <= 100; i++) {
        await modulate(10, 10, 10)
      }

      deferred.resolve()
    }
  })

suite
  .add('toPNG [100x]', {
    onCycle,
    onComplete,
    defer: true,
    fn: async function (deferred) {
      for (let i = 0; i <= 100; i++) {
        await toPNG()
      }

      deferred.resolve()
    }
  })

suite.run()
