package main

import "example.com/user/image/process"

func main() {
  process.Rotate() 
  process.Resize(500, 500)
  process.Sharpened()
  process.Watermarker()
  process.ConvertPNG()
  process.Crop()
}
