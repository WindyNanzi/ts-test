namespace demo2 {
  function join<ABC>(first: ABC, second: ABC) {
    return `${first}${second}`
  }

  //   interface Item {
  //     name: string
  //   }

  type Item = number | string | { name: string }

  class DataManager<T extends Item> {
    constructor(private data: T[]) {}
    getItem(index: number): T {
      if ('name' in data[index]) {
        return data[index].name
      } else {
        return data[index]
      }
    }
  }

  const data = new DataManager<Item>([2])
  //   data.getItem(0)
  console.log(data.getItem(0))
}
