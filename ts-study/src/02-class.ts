namespace Class {
  // 抽象类
  abstract class Animal {
    abstract makeSound(): void

    move(): void {
      console.log('moving...')
    }
  }

  // const cat = new Animal() 错误的列子
  class Cat extends Animal {
    makeSound() {
      console.log('miao miao')
    }
  }

  new Cat().makeSound()

  class DefaultProps {
    public delay: number = 500
    public isActive: boolean = false
    public afterClick: () => void = () => {}
    public beforeClick: () => void = () => {}
  }

  class Button {
    public static defaultProps = new DefaultProps()
  }

  Button.defaultProps
}
