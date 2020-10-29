namespace ReflectMetadata {
  @Reflect.metadata('name', 'A')
  class A {
    @Reflect.metadata('hello', 'world')
    public hello(): string {
      return 'hello world'
    }
  }

  console.log(Reflect.getMetadata('name', 'A'))
  console.log(Reflect.getMetadata('hello', new A()))

  const METHOD_METADATA = 'method'
  const PATH_METADAATA = 'path'

  const Controller = (path: string): ClassDecorator => {
    return (target) => {
      Reflect.defineMetadata(PATH_METADAATA, path, target)
    }
  }

  const createMappingDecorator = (method: string) => (
    path: string
  ): MethodDecorator => {
    return (target, key, descriptor) => {
      Reflect.defineMetadata(PATH_METADAATA, path, descriptor.value!)
      Reflect.defineMetadata(METHOD_METADATA, method, descriptor.value!)
    }
  }

  const Get = createMappingDecorator('GET')
  const Post = createMappingDecorator('POST')
}
