namespace Generic {
  //    这种写法就是错误的，key 需要类型索引 keyof 关键字进行约束
  //   function getValue<T extends object>(obj: T, key: string) {
  //     return obj[key]
  //   }

  function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
  }

  const o = {
    a: '??',
    name: 'wpppp',
    age: 19,
    1: true,
  }

  getValue(o, 1)

  interface Ione {
    one: number
  }

  interface Itwo {
    two: string
  }

  //   多个类型约束
  class Demo<T extends Ione & Itwo> {
    constructor(private genericProp: T) {}

    useT() {
      const { one, two } = this.genericProp
      console.log(one, two)
    }
  }

  //    泛型与new
  //    Error:
  //   function factory<T>(type: T): T {
  //     return new type()
  //   }

  //    表示泛型 T 是可被构造的
  function factory<T>(type: { new (): T }): T {
    return new type()
  }
}
