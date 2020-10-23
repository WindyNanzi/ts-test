// ts 直接去引用js 会出现问题需要一个翻译文件： @types/...
// ts -> .d.ts ->js
import superagent from 'superagent'
import cheerio from 'cheerio'
import fs from 'fs'
import path from 'path'

interface Imovie {
  title: string
  grade: string
}

interface Content {
  [propName: number]: Array<Imovie>
}
class Crowller {
  private url = `https://movie.douban.com/`
  private rawHtml = ''

  async getRawHtml() {
    const result = await superagent.get(this.url)
    return result.text
  }

  getMovieInfo(html: string) {
    const $ = cheerio.load(html)
    const movies: Array<Imovie> = []

    $('.ui-slide-item ul').each((_, ele) => {
      const movie: Imovie = {
        title: $(ele).find('.title').text().trim(),
        grade:
          $(ele)
            .find('.rating .subject-rate')
            .text()
            .trim() || '暂无评分',
      }
      movies.push(movie)
    })

    return movies
  }

  generateJsonContent(movies: Array<Imovie>) {
    const filePath = path.resolve(
      __dirname,
      '../data/movies.json'
    )
    let fileContent: Content = {}
    if (fs.existsSync(filePath)) {
      fileContent = {
        ...JSON.parse(fs.readFileSync(filePath, 'utf-8')),
        [new Date().getTime()]: JSON.stringify(fileContent),
      }
    }
    fileContent[new Date().getTime()] = movies
    return fileContent
  }

  async initSpiderProcess() {
    const filePath = path.resolve(
      __dirname,
      '../data/movies.json'
    )
    const html = await this.getRawHtml()
    const movies = this.getMovieInfo(html)
    const fileContent = this.generateJsonContent(movies)
    fs.writeFileSync(filePath, JSON.stringify(fileContent))
  }

  constructor() {
    this.initSpiderProcess()
  }
}

const crowller = new Crowller()
