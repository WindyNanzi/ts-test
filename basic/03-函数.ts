namespace demo03 {
  function hello() {}
  const hello1 = function () {}
  const hello2 = () => {}

  function add(a: number, b: number): number {
    return a + b
  }

  const total = add(1, 2)

  const sayHello: () => void = () => {
    console.log('wooooooo')
  }

  function errorEmitter(): never {
    while (true) {}
  }

  // 函数结构语法
  function add1({ first, secound }: { first: number; secound: number }) {
    return first + secound
  }

  console.log(add1({ first: 1, secound: 2 }))
}
