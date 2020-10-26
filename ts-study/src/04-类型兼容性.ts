namespace TypeJianRong {
  class Person {
    constructor(
      public weight: number,
      public name: string,
      public born: string
    ) {}
  }

  interface Dog {
    name: string
    weight: number
  }

  let x: Dog

  //   Dog 的属性 Person 都有，因此说得上兼容
  x = new Person(120, 'cxk', '1996-12-12')

  let one = (a: number) => 0
  let two = (b: number, c: number) => {}

  two = one //one 中的每个参数都能在 two 中找到，所以可以赋值
  // one = two

  class Animal {
    protected eat: () => void = () => {}
  }

  class Cat extends Animal {}

  let a1 = new Animal()
  let c1 = new Cat()

  a1 = c1
  c1 = a1

  class Man {
    protected eat: () => void = () => {}
  }

  let m1 = new Man()

  // a1 = m1  私有的成员如果需要兼容，则必须来自同一个类

  class Food {
    public name: string = 'food'
  }

  class Apple {
    public name: string = 'apple'
  }

  let f1 = new Food()
  let ap1 = new Apple()

  f1 = ap1
}
