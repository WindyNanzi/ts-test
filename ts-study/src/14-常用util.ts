namespace Utils {
  // 将属性全部变成可选
  type Partial<T> = { [P in keyof T]?: T[P] }

  // 类型递归
  interface Company {
    id: number
    name: string
    isOnline: boolean
  }

  interface Person {
    id: number
    name: string
    address?: string
    company: Company
  }

  type DeepPartial<T> = {
    [U in keyof T]?: T[U] extends object ? DeepPartial<T[U]> : T[U]
  }

  type R = DeepPartial<Person>

  // 将属性全部变成必选
  type Required<T> = { [P in keyof T]-?: T[P] }
  type R1 = Required<Person>

  // Omit
  type Exclude<T, U> = T extends U ? never : T //从 T 中排除可分配给 U 的元素
  type R2 = Exclude<1 | 2, 1 | 3>

  type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
  type Foo = Omit<{ name: string; age: number }, 'name'> // Omit 的作用是忽略 T 中的某些属性

  // Merge
  type Compute<T extends any> = T extends Function // 将交叉类型合并,
    ? T
    : { [K in keyof T]: T[K] }

  // 实际上从这个例子可以看出来， & 操作和 混入其实是一样的，只不过为了提示更加直观， 使用了 Compute 将混入的类型属性再次遍历了一遍
  type R5 = { x: number } & { y: string } extends { x: number; y: string }
    ? true
    : false

  type R3 = Compute<{ x: number } & { y: string }>

  type Merge<T extends object, U extends object> = Compute<U & Omit<T, keyof U>> // 将两个对象的属性合并
  type R4 = Merge<Person, Company>

  // Intersection 找出T 和 U 共有的键值对
  type Intersection<T, U> = Pick<
    T,
    Extract<keyof T, keyof U> & Extract<keyof U, keyof T>
  >
  type R6 = Intersection<Company, Person>
  type R7 = Extract<keyof Company, keyof Person> &
    Extract<keyof Person, keyof Company>

  // Overwrite
  type NoExtract<T, U> = T extends U ? never : T

  type Overwrite<T extends object, U extends object> = Compute<
    Intersection<U, T> & Pick<T, NoExtract<keyof T, keyof U>>
  >

  type R8 = Overwrite<{ id: string; name: string }, { id: number }>

  // 去除所有的 readonly
  type Mutable<T> = {
    -readonly [P in keyof T]: T[P]
  }

  interface read {
    readonly a: string
    readonly b: string
    c: number
  }

  type R9 = Mutable<read>
}
