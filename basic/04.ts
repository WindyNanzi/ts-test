namespace demo04 {
  // 基础类型

  let count
  count = 4 //此时count 为 any 类型

  // 对象类型
  const func = (str: string) => {
    return parseInt(str, 10)
  }

  const func1: (str: string) => number = (str) => parseInt(str, 10)

  // 其他case
  const rawData = '{"name": "dell"}'
  const newData = JSON.parse(rawData) //此时newData是无法通过类型推断推断出来
  const newData1: { name: string } = JSON.parse(rawData)
}
