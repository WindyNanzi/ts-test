namespace demo {
  interface Point {
    x: number
    y: number
  }

  function demo(data: Point) {
    console.log('woooooooooo')
    return Math.sqrt(data.x ** 2 + data.y ** 2)
  }

  demo({ x: 1, y: 2 })

  const point: Point = {
    x: 1,
    y: 2,
  }
}
