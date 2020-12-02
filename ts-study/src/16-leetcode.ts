namespace LeetCode {
  interface Action<T> {
    payload?: T
    type: string
  }

  class EffectModule {
    count = 1
    message = 'hello!'

    delay(input: Promise<number>) {
      return input.then((i) => ({
        payload: `hello ${i}!`,
        type: 'delay',
      }))
    }

    setMessage(action: Action<Date>) {
      return {
        payload: action.payload!.getMilliseconds(),
        type: 'set-message',
      }
    }
  }

  // 笨办法
  type Connect1 = (
    module: EffectModule
  ) => {
    [P in keyof EffectModule]: EffectModule[P] extends Function
      ? EffectModule[P] extends (p: infer ParamType) => infer ReturnType
        ? ParamType extends Promise<infer T>
          ? ReturnType extends Promise<Action<infer U>>
            ? (p: T) => Action<U>
            : never
          : ParamType extends Action<infer T>
          ? ReturnType extends Action<infer U>
            ? (p: T) => Action<U>
            : never
          : never
        : never
      : EffectModule[P]
  }

  // 第一次优化
  type pickEffectModule = {
    [P in keyof EffectModule]: EffectModule[P] extends Function
      ? funcConnect<EffectModule[P]>
      : EffectModule[P]
  }

  type funcConnect<Func> = Func extends
    | ((p: Promise<infer T>) => Promise<Action<infer U>>)
    | ((p: Action<infer T>) => Action<infer U>)
    ? (p: T) => Action<U>
    : never

  // 完整优化
  type pickMethod<T> = {
    [K in keyof T]: T[K] extends Function ? K : never
  }[keyof T]
  type asyncMethod<T, U> = (input: Promise<T>) => Promise<Action<U>>
  type asyncMethodConnect<T, U> = (input: T) => Action<U>
  type syncMethod<T, U> = (input: Action<T>) => Action<U>
  type syncMethodConnect<T, U> = (input: T) => Action<U>
  type EffectModuleMethodTrans<Func> = Func extends asyncMethod<
    infer T,
    infer U
  >
    ? asyncMethodConnect<T, U>
    : Func extends syncMethod<infer T, infer U>
    ? syncMethodConnect<T, U>
    : never

  type EffectModuleMethod = pickMethod<EffectModule>

  type Connect = (
    module: EffectModule
  ) => {
    [K in EffectModuleMethod]: EffectModuleMethodTrans<EffectModule[K]>
  }
}
