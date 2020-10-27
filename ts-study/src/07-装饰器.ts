namespace Decorator {
  function addAge(constructor: Function) {
    constructor.prototype.age = 18
  }

  @addAge
  class Person {
    name: string
    age!: number
    constructor() {
      this.name = 'xiaozhu'
    }
  }

  let person = new Person()
  console.log(person.age)

  function method(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(target)
    console.log('prop: ' + propertyKey)
    console.log('desc: ' + JSON.stringify(descriptor))
    descriptor.writable = false
  }

  class Person1 {
    name: string
    constructor() {
      this.name = 'xiaozu'
    }

    @method
    say() {
      return 'instance method'
    }

    @method
    static run() {
      return 'static method'
    }
  }

  const p1 = new Person1()
  p1.say = function () {
    return 'editable'
  }

  p1.say()
}
