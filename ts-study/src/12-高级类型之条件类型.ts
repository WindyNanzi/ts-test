namespace Demo12 {
  // 条件类型，可以找出 T 类型中 U 不包含的部分
  type Diff<T, U> = T extends U ? never : T

  type Filter<T, U> = T extends U ? T : never
  // 剔除 null 和 underfined
  type NoneNullable<T> = Diff<T, null | undefined>

  type R = Diff<'a' | 'b' | 'c', 'a' | 'c'>
  type R1 = Filter<string | number | (() => void), Function>
  type R2 = NoneNullable<string | number | undefined>
  const a: R = 'b'

  interface Part {
    id: number
    name: string
    subparts: Part[]
    updatePart(newName: string): void
    say(): void
  }

  type FunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? K : never
  }[keyof T] // keyof T 可以取出 interface T 的 value, 但是由于 never 无法取出，因此只返回了满足条件的属性名称

  type R3 = FunctionPropertyNames<Part>

  interface People {
    id: string
    name: string
    age?: number
    form?: string
  }

  // 可筛选出一个interface 中的可选类型
  type NullableKeys<T> = {
    [K in keyof T]-?: undefined extends T[K] ? K : never
  }[keyof T]

  type NullableKeys1<T> = {
    [K in keyof T]: T[K]
  }
  type R4 = NullableKeys<People>
  type R5 = NullableKeys1<People>
}
