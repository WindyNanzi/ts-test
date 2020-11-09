namespace Demo11 {
  // 一个普通的 pick
  // interface Obj {
  //   [key: string]: any
  // }

  // function pick(o: Obj, name: string[]) {
  //   return name.map((n) => o[n])
  // }

  class Images {
    public src: string = 'src'
    public alt: string = 'alt'
    public width: number = 500
  }

  type propsName = keyof Images // src | alt | width
  type propsType = Images[propsName] // string | number

  // TS 版pick函数
  function pick<T, K extends keyof T>(o: T, name: K[]): T[K][] {
    return name.map((n) => o[n])
  }

  const user = {
    username: 'Jessia Lee',
    id: 4600221123112,
    token: 'ewjdnu23jb3920djoksha894s1klwjd92',
    avater: 'https://image.com/xwxwjxacs.jpg',
    isVip: false,
  }

  console.log(pick(user, ['isVip', 'avater']))

  interface User {
    username: string
    id: number
    token: string
    avater: string
    isVip: boolean
  }

  // 针对类型的操作， 将所有的属性变成可选的
  type partial<T> = { [K in keyof T]?: T[K] }

  type partialUser = partial<User>
  type partialUser1 = Partial<User>
}
