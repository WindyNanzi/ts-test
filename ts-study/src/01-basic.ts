namespace Basic {
  const isLoading: boolean = false

  const dec: number = 6
  const hex: number = 0xf00d
  const bin: number = 0b1010
  const oct: number = 0o744

  const book: string = '深入浅出 Typescript'

  function say(): void {
    console.log('wooo')
  }

  const sy1 = Symbol()

  const tuple: [string, number] = ['wooo', 3]

  enum Month {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
  }

  function isSummer(month: Month) {
    switch (month) {
      case Month.June:
      case Month.July:
      case Month.August:
        return true
      default:
        return false
    }
  }
}
