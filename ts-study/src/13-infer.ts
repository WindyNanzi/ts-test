namespace infer {
  // infer 表示在 extends 条件语句中待推断的类型变量

  // infer P 在此处表示待推断的参数类型
  type ParamType<T> = T extends (params: infer P) => any ? P : any
  // infer P 在此处表示待推断的返回结果类型
  type ReturnType<T> = T extends (...args: any[]) => infer P ? P : any

  interface User {
    id: number
    name: string
    form?: string
  }

  type Foo = (str: string) => User

  type R0 = ParamType<Foo>
  type R1 = ReturnType<Foo> //User

  interface A {}
  interface B {}

  // 骚操作
  type UnionToIntersection<U> = (
    U extends any ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  type UnionToIntersection1<U> = [
    U extends any ? (p: U) => void : never
  ] extends [(p: infer P) => void]
    ? P
    : never

  type R2 = UnionToIntersection<string | number> // 由于变成了 number & string 所以返回 never
  // 相当于： ((k: string)=>void) | ((k: number)=>void)  , 假设有一个变量能同时传给 ((k: string)=>void)  和 ((k: number)=>void) 变量类型则为： string & number
  type R3 = UnionToIntersection<A | B> // 不是裸类型，因此不会出现联合类型， 变成了交叉类型

  type R4 = UnionToIntersection1<A | B>

  type NakedUsage<T> = T extends boolean ? 'Yes' : 'No'
  type Rx = NakedUsage<number | boolean>

  type f1<T, U> = ((x: T) => void) | ((x: U) => void)
  type f2<T, U> = {
    (x: T): void
    (x: U): void
  }

  type same = f1<number, string> extends f2<number, string> ? true : false
}
