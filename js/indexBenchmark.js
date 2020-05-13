const rotate = require('./index')
const { Benchmark } = require('benchmark')

const suite = new Benchmark.Suite()

suite.add('rotate', {
  defer: true,
  fn: function (deferred) {
    for (let i = 0; i <= 100; i++) {
      rotate(() => {
        deferred.resolve();
      })
    }
  }
}).on('complete', function () {
  console.log(this[0].stats)
}).run()
