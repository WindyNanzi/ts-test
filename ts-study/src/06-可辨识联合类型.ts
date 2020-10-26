namespace Kebianshi {
  // 字面量类型
  const isTrue: true = true
  const one: 1 = 1
  const str: 'str' = 'str'

  //Error
  // const git: 'git' = 'svn'

  // 字面量类型要和实际的值的字面量一一对应，它可以和类型别名与联合类型一起使用：
  type Direction = 'top' | 'bottom' | 'left' | 'right'
  const dir: Direction = 'right'

  // 类型字面量, 下面中的 Foo 就是类型字面量，它与Interface 十分相似
  type Foo = {
    baz: [number, 'xiaozhu']
    toString(): string
    readonly [Symbol.iterator]: 'github'
    0x1: 'foo'
  }

  const foo: Foo = {
    baz: [1, 'xiaozhu'],
    toString() {
      return 'xx'
    },
    [Symbol.iterator]: 'github',
    0x1: 'foo',
  }

  // 可辨识联合类型

  interface Iinfo {
    username: string
  }

  interface UserAction {
    id?: number
    action: 'create' | 'delete'
    info: Iinfo
  }

  const action: UserAction = {
    id: 111,
    action: 'create',
    info: {
      username: 'wooooo',
    },
  }

  // 而 create 动作时不需要 id 的， 因此有类型字面量：
  type IUserAction =
    | {
        action: 'create'
        info: Iinfo
      }
    | {
        id: number
        action: 'delete'
        info: Iinfo
      }

  const action1: IUserAction = {
    // id: 111, //Error, 在编译阶段就会报错
    action: 'create',
    info: {
      username: '>>',
    },
  }
}
