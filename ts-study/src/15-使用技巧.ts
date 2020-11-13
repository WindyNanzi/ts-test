namespace Skill {
  type Car = 'Audi' | 'BMW' | 'Md'
  type CarList = Record<Car, { age: number }>

  const cars: CarList = {
    Audi: {
      age: 1,
    },
    BMW: {
      age: 2,
    },
    Md: {
      age: 3,
    },
  }
}
