// https://stackoverflow.com/questions/53322925/is-it-possible-to-limit-iterations-b-n-in-go-benchmarking

package process

import "testing"

func BenchmarkRotate(b *testing.B) {
  for n := 0; n < b.N; n++ {
    Rotate()
  }
}

func BenchmarkResize300x300(b *testing.B) {
  for n := 0; n < b.N; n++ {
    Resize(300, 300)
  }
}

func BenchmarkResize500x500(b *testing.B) {
  for n := 0; n < b.N; n++ {
    Resize(500, 500)
  }
}

func BenchmarkSharpened(b *testing.B) {
  for n := 0; n < b.N; n++ {
    Sharpened()
  }
}

func BenchmarkWatermarker(b *testing.B) {
  for n := 0; n < b.N; n++ {
    Watermarker()
  }
}

func BenchmarkConvertPNG(b *testing.B) {
  for n := 0; n < b.N; n++ {
    ConvertPNG()
  }
}

func BenchmarkCrop(b *testing.B) {
  for n := 0; n < b.N; n++ {
    Crop()
  }
}
