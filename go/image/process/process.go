package process

import (
  "fmt"
  "os"
  "gopkg.in/h2non/bimg.v1"
)

func Rotate() {
  buffer, err := bimg.Read("large.jpeg")
  if err != nil {
    fmt.Fprintln(os.Stderr, err)
  }

  newImage, err := bimg.NewImage(buffer).Rotate(90)
  if err != nil {
    fmt.Fprintln(os.Stderr, err)
  }

  bimg.Write("large_rotate.jpeg", newImage)
}

func Resize(w int, h int) {
  buffer, err := bimg.Read("large.jpeg")
  if err != nil {
    fmt.Fprintln(os.Stderr, err)
  }

  options := bimg.Options {
    Width: w,
    Height: h,
    Quality: 100,
  }

  newImage, err := bimg.Resize(buffer, options)
  if err != nil {
    fmt.Fprintln(os.Stderr, err)
  }

  fileName := fmt.Sprintf("%s%d%s%d%s", "large_", w, "x", h, ".jpeg")
  bimg.Write(fileName, newImage)
}

func Sharpened() {
  buffer, err := bimg.Read("large.jpeg")
  if err != nil {
    fmt.Fprintln(os.Stderr, err)
  }

  options := bimg.Options {
    Sharpen: bimg.Sharpen {
      Radius: 5,
      X1: 5.0,
      Y2: 5.0,
      Y3: 5.0,
      M1: 5.0,
      M2: 5.0,
    },
  }

  newImage, err := bimg.NewImage(buffer).Process(options)
  if err != nil {
    fmt.Fprintln(os.Stderr, err)
  }

  bimg.Write("large_sharpened.jpeg", newImage)
}

func Watermarker() {
  buffer, err := bimg.Read("large.jpeg")
  if err != nil {
    fmt.Fprintln(os.Stderr, err)
  }

  watermark := bimg.Watermark {
    Text:       "Chuck Norris (c) 2315",
    Opacity:    1,
    Width:      200,
    DPI:        100,
    Margin:     150,
    Font:       "comic sans bold 12",
    Background: bimg.Color {
      R: 255, 
      B: 255, 
      G: 255,
    },
  }

  newImage, err := bimg.NewImage(buffer).Watermark(watermark)
  if err != nil {
    fmt.Fprintln(os.Stderr, err)
  }

  bimg.Write("large_watermark.jpeg", newImage)
}

func ConvertPNG() {
  buffer, err := bimg.Read("large.jpeg")
  if err != nil {
    fmt.Fprintln(os.Stderr, err)
  }
  
  newImage, err := bimg.NewImage(buffer).Convert(bimg.PNG)
  if err != nil {
    fmt.Fprintln(os.Stderr, err)
  }

  bimg.Write("large.png", newImage)
}
