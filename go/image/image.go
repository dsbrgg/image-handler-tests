package main

import (
  "fmt"
  "os"
  "gopkg.in/h2non/bimg.v1"
)

func main() {
  fmt.Println("Main -----")

  buffer, err := bimg.Read("large.jpeg")
  if err != nil {
    fmt.Fprintln(os.Stderr, err)
  }

  newImage, err := bimg.NewImage(buffer).Rotate(90)
  if err != nil {
    fmt.Fprintln(os.Stderr, err)
  }

  bimg.Write("rotate_large.jpeg", newImage)
}


