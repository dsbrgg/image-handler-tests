# Sharp vs Bimg

Simple performance test for Sharp (js) and Bimg (golang). Both libraries use `libvips` bindings (a C library for image processing) to provide an API for image processing on their corresponding language.

## Benchmarks

- go

```
$ go test -bench=. -benchtime=100x

goos: darwin
goarch: amd64
pkg: example.com/user/image/process
BenchmarkRotate-8                    100         335841926 ns/op
BenchmarkResize500x500-8             100          74879696 ns/op
PASS
ok      example.com/user/image/process  41.595s

```

- js

```
$ npm run bench

> sharp-test@1.0.0 bench /Users/dsbrgg/local/image-handler-tests/js
> node indexBenchmark.js

rotate [100x] x 0.14 ops/sec ±0.39% (5 runs sampled)
rotate [100x] { moe: 0.027327469070636143,
  rme: 0.392090982231713,
  sem: 0.009844189146482761,
  deviation: 0.02201227611490109,
  mean: 6.969675485800001,
  sample:
   [ 6.9915137309999995,
     6.934312183,
     6.976537434,
     6.981415495,
     6.964598586 ],
  variance: 0.00048454029975864493 }

resize [100x] x 0.90 ops/sec ±1.93% (9 runs sampled)
resize [100x] { moe: 0.02137183083185882,
  rme: 1.9258170627705424,
  sem: 0.009267923170797407,
  deviation: 0.02780376951239222,
  mean: 1.1097539452222225,
  sample:
   [ 1.154222491,
     1.114366694,
     1.108375353,
     1.110279881,
     1.118766888,
     1.083291865,
     1.117235357,
     1.1267766049999999,
     1.054470373 ],
  variance: 0.0007730495990982311 }

```
