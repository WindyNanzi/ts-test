namespace demo01 {
  interface Bird {
    fly: boolean
    sing: () => void
  }

  interface Dog {
    fly: boolean
    bark: () => void
  }

  function trainAnimal(animal: Bird | Dog) {
    if (animal.fly) {
      ;(animal as Bird).sing()
    } else {
      ;(animal as Dog).bark()
    }
  }
}
