/**
 * 类型注解：我们来告诉 TS 变量是什么类型
 * 类型推断： TS 自己分析变量的类型
 */

namespace demo02 {
  let count: number
  count = 2

  let count1 = 123

  let total = count + count1 //这里可以自动推断total的类型，因此不需要对其进行类型注解

  const obj = {
    name: 'xiaoming',
    age: 13,
  }
}
