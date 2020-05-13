package rotate

import "testing"

func BenchmarkRotate(b *testing.B) {
  for n := 0; n < b.N; n++ {
    Rotate()
  }
}
