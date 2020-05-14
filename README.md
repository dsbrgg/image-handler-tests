# Sharp vs Bimg

Simple performance test for Sharp (js) and Bimg (golang). Both libraries use `libvips` bindings (a C library for image processing) to provide an API for image processing on their corresponding language.

## Benchmarks

- go

```
$ go test -bench=. -benchtime=100x

goos: darwin
goarch: amd64
pkg: example.com/user/image/process
BenchmarkRotate-8                    100         345602435 ns/op
BenchmarkResize300x300-8             100          47451269 ns/op
BenchmarkResize500x500-8             100          75425005 ns/op
PASS
ok      example.com/user/image/process  47.423s
```

- js

```
$ npm run bench

> sharp-test@1.0.0 bench /Users/dsbrgg/local/image-handler-tests/js
> node indexBenchmark.js

------------------------------------------------------------------------

rotate [100x] x 0.14 ops/sec ±0.00% (0 runs sampled)
rotate [100x] x 0.14 ops/sec ±0.00% (1 run sampled)
rotate [100x] x 0.14 ops/sec ±12.58% (2 runs sampled)
rotate [100x] x 0.14 ops/sec ±2.60% (3 runs sampled)
rotate [100x] x 0.14 ops/sec ±1.50% (4 runs sampled)
rotate [100x] { moe: 0.08418025708037821,
  rme: 1.1830296194571508,
  sem: 0.0303243001010008,
  deviation: 0.06780719639594153,
  mean: 7.1156508422,
  sample:
   [ 7.172829661, 7.032237233, 7.14505701, 7.174456645, 7.053673662 ],
  variance: 0.004597815883077786 }

------------------------------------------------------------------------

resize(300, 300) [100x] x 1.36 ops/sec ±0.00% (0 runs sampled)
resize(300, 300) [100x] x 1.53 ops/sec ±0.00% (1 run sampled)
resize(300, 300) [100x] x 1.52 ops/sec ±78.57% (2 runs sampled)
resize(300, 300) [100x] x 1.53 ops/sec ±17.52% (3 runs sampled)
resize(300, 300) [100x] x 1.51 ops/sec ±9.87% (4 runs sampled)
resize(300, 300) [100x] x 1.53 ops/sec ±6.80% (5 runs sampled)
resize(300, 300) [100x] x 1.53 ops/sec ±5.31% (6 runs sampled)
resize(300, 300) [100x] x 1.49 ops/sec ±4.36% (7 runs sampled)
resize(300, 300) [100x] x 1.50 ops/sec ±3.65% (8 runs sampled)
resize(300, 300) [100x] x 1.49 ops/sec ±3.14% (9 runs sampled)
resize(300, 300) [100x] x 1.49 ops/sec ±2.76% (10 runs sampled)
resize(300, 300) [100x] x 1.49 ops/sec ±2.45% (11 runs sampled)
resize(300, 300) [100x] { moe: 0.014791233503279896,
  rme: 2.2140836890932643,
  sem: 0.006720233304534255,
  deviation: 0.023279571044339642,
  mean: 0.6680521416666667,
  sample:
   [ 0.737498661,
     0.651598556,
     0.657026562,
     0.653151676,
     0.660571082,
     0.653017121,
     0.653424262,
     0.672298474,
     0.668755532,
     0.669659025,
     0.669142329,
     0.67048242 ],
  variance: 0.0005419384280084566 }

------------------------------------------------------------------------

resize(500, 500) [100x] x 0.90 ops/sec ±0.00% (0 runs sampled)
resize(500, 500) [100x] x 0.92 ops/sec ±0.00% (1 run sampled)
resize(500, 500) [100x] x 0.94 ops/sec ±12.30% (2 runs sampled)
resize(500, 500) [100x] x 0.95 ops/sec ±5.64% (3 runs sampled)
resize(500, 500) [100x] x 0.96 ops/sec ±3.94% (4 runs sampled)
resize(500, 500) [100x] x 0.89 ops/sec ±3.22% (5 runs sampled)
resize(500, 500) [100x] x 0.96 ops/sec ±3.35% (6 runs sampled)
resize(500, 500) [100x] x 0.94 ops/sec ±2.92% (7 runs sampled)
resize(500, 500) [100x] x 0.97 ops/sec ±2.47% (8 runs sampled)
resize(500, 500) [100x] { moe: 0.0249334920645839,
  rme: 2.335126249765324,
  sem: 0.0108124423523781,
  deviation: 0.0324373270571343,
  mean: 1.067757774,
  sample:
   [ 1.107796532,
     1.086559084,
     1.058674555,
     1.049521691,
     1.041295015,
     1.127288374,
     1.044998038,
     1.061139977,
     1.0325467 ],
  variance: 0.0010521801866114969 }

------------------------------------------------------------------------
```