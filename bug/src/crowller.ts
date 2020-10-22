// ts 直接去引用js 会出现问题需要一个翻译文件： @types/...
// ts -> .d.ts ->js
import superagent from 'superagent'

class Crowller {
  private secret = 'secretKey'
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`
  private rawHtml = ''

  async getRawHtml() {
    const result = await superagent.get(this.url)
    this.rawHtml = result.text
  }

  constructor() {
    this.getRawHtml()
  }
}

const crowller = new Crowller()
