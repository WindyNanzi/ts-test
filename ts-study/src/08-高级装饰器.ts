namespace GaojiZhuangShiQi {
  // 参数装饰器
  // 参数装饰器可以提供信息，给类原型添加新的属性，属性中包含一系列信息
  function logParameter(target: Object, propertyKey: string, index: number) {
    console.log(target, propertyKey, index)
  }

  class Dog {
    greet(@logParameter message: string, @logParameter name: string): string {
      return `${message} ${name}`
    }
  }
  const d = new Dog()
  d.greet('hello', 'wangwang!')

  // 装饰器工厂
  // 打印构造函数
  function logClass(target: typeof Person) {
    console.log('class: ' + target)
  }

  // 打印属性名
  function logProperty(target: any, propertyKey: string) {
    console.log('prop: ' + propertyKey)
  }

  // 打印方法名
  function logMethod(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('method: ' + propertyKey)
  }

  // 打印参数位置
  function logParameterIndex(target: any, peopertyKey: string, index: number) {
    console.log('param: ' + index)
  }

  // 工厂
  // 说实话，这工厂老是标红，我也找不着解决方案
  //   function log(...args: any[]) {
  //     switch (args.length) {
  //       case 1:
  //         return logClass.apply(this, args)
  //       case 2:
  //         return logProperty.apply(this, args)
  //       case 3:
  //         if (typeof args[2] === 'number') {
  //           return logParameter.apply(this, args)
  //         }
  //         return logMethod.apply(this, args)
  //       default:
  //         throw new Error('Decorators are not valid here!')
  //     }
  //   }

  @logClass
  class Person {
    @logProperty
    private readonly name: string

    constructor(name: string) {
      this.name = name
    }

    @logMethod
    public greet(@logParameterIndex message: string) {
      console.log(`${this.name} ${message}`)
    }
  }

  const p = new Person('Jack') //还未调用方法，装饰器已经在起作用了
  //   p.greet('wooooO!')

  // 装饰器顺序
  function f() {
    console.log('f: registered')
    return function (
      target: any,
      proppertyKey: string,
      descriptor: PropertyDescriptor
    ) {
      console.log('f: called')
    }
  }

  function g() {
    console.log('g: registered')
    return function (
      target: any,
      proppertyKey: string,
      descriptor: PropertyDescriptor
    ) {
      console.log('g: called')
    }
  }

  class Demo {
    @f()
    @g()
    say() {
      console.log('woooooooo!')
    }
  }

  new Demo().say()
}
