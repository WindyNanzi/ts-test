namespace IS {
  // 赋值断言
  let x: number
  initialize()
  console.log(x! + x!)
  function initialize() {
    x = 10
  }

  // is 关键字
  // 这里的 is 关键字缩小了 test 的范围， 比直接 boolean 而言
  // test 参数满足条件可以直接使用.length 属性
  function isString(test: any): test is string {
    return typeof test === 'string'
  }

  function example(foo: number | string) {
    if (isString(foo)) {
      console.log('it is a string')
      console.log(foo.length)
    }
  }
  example('hello')

  // 可调用类型注解， 不太明白啥意思
  interface ToString {
    new (): string
  }

  declare const somethingToString: ToString

  new somethingToString()
}
