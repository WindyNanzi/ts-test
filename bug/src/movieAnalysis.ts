import cheerio from 'cheerio'
import fs from 'fs'
import { Analysis } from './crowller'

interface Imovie {
  title: string
  grade: string
}

interface Content {
  [propName: number]: Array<Imovie>
}

export class MovieAnalysis implements Analysis {
  private getMovieInfo(html: string) {
    const $ = cheerio.load(html)
    const movies: Array<Imovie> = []

    $('.ui-slide-item ul').each((_, ele) => {
      const movie: Imovie = {
        title: $(ele).find('.title').text().trim(),
        grade: $(ele).find('.rating .subject-rate').text().trim() || '暂无评分',
      }
      movies.push(movie)
    })

    return movies
  }

  private generateJsonContent(movies: Array<Imovie>, filePath: string) {
    let fileContent: Content = {}
    if (fs.existsSync(filePath)) {
      fileContent = {
        ...JSON.parse(fs.readFileSync(filePath, 'utf-8')),
        [new Date().getTime()]: JSON.stringify(fileContent),
      }
    }
    fileContent[new Date().getTime()] = movies
    return JSON.stringify(fileContent)
  }

  public analysis(html: string, filePath: string): string {
    const movies = this.getMovieInfo(html)
    return this.generateJsonContent(movies, filePath)
  }
}
