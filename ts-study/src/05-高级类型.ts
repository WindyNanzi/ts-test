namespace GaojiType {
  // 交叉类型
  // 将多个类型合并成一个类型
  interface IAnyObject {
    [propName: string]: any
  }

  function mixin<T extends IAnyObject, U extends IAnyObject>(
    first: T,
    secound: U
  ): T & U {
    const result = <T & U>{}
    for (let id in first) {
      ;(<T>result[id]) = first[id]
    }

    for (let id in secound) {
      if (!result.hasOwnProperty(id)) {
        ;(<U>result)[id] = secound[id]
      }
    }

    return result
  }

  // 联合类型
  // 你希望属性为多种类型之一，如字符串或者数组，就是联合类型发挥的地方
  function formatCommandline(command: string[] | string) {
    let line = ''
    if (typeof command === 'string') {
      line = command.trim()
    } else {
      line = command.join(' ').trim()
    }
  }

  // 类型别名
  // 类型别名会给一个类型起个新名字
  type some = boolean | string
  const b: some = true
  const c: some = 'wooooo'

  // 泛型的类型别名
  type Container<T> = { value: T }

  // 可以使用类型别名在属性里引用自己:
  type Tree<T> = {
    value: T
    left: Tree<T> | null
    right: Tree<T> | null
  }

  // interface 只能用于定义对象类型，而type的声明方式除了对象之外还可以定义交叉，联合，原始类型等
}
