// ts 直接去引用js 会出现问题需要一个翻译文件： @types/...
// ts -> .d.ts ->js
import superagent from 'superagent'
import fs from 'fs'
import path from 'path'
import { MovieAnalysis } from './movieAnalysis'

export interface Analysis {
  analysis: (html: string, filePath: string) => string
}

class Crowller {
  private filePath = path.resolve(__dirname, '../data/movies.json')
  private url = `https://movie.douban.com/`

  async getRawHtml() {
    const result = await superagent.get(this.url)
    return result.text
  }

  writeFile(content: string) {
    fs.writeFileSync(this.filePath, content)
  }

  async initSpiderProcess() {
    const html = await this.getRawHtml()
    const fileContent = this.Analysis.analysis(html, this.filePath)
    this.writeFile(fileContent)
  }

  constructor(private Analysis: Analysis) {
    this.initSpiderProcess()
  }
}

const movieAnalysis = new MovieAnalysis()
new Crowller(movieAnalysis)
