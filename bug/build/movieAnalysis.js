"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieAnalysis = void 0;
var cheerio_1 = __importDefault(require("cheerio"));
var fs_1 = __importDefault(require("fs"));
var MovieAnalysis = /** @class */ (function () {
    function MovieAnalysis() {
    }
    MovieAnalysis.getInstance = function () {
        if (!MovieAnalysis.instance) {
            MovieAnalysis.instance = new MovieAnalysis();
        }
        return MovieAnalysis.instance;
    };
    MovieAnalysis.prototype.getMovieInfo = function (html) {
        var $ = cheerio_1.default.load(html);
        var movies = [];
        $('.ui-slide-item ul').each(function (_, ele) {
            var movie = {
                title: $(ele).find('.title').text().trim(),
                grade: $(ele).find('.rating .subject-rate').text().trim() || '暂无评分',
            };
            movies.push(movie);
        });
        return movies;
    };
    MovieAnalysis.prototype.generateJsonContent = function (movies, filePath) {
        var _a;
        var fileContent = {};
        if (fs_1.default.existsSync(filePath)) {
            fileContent = __assign(__assign({}, JSON.parse(fs_1.default.readFileSync(filePath, 'utf-8'))), (_a = {}, _a[new Date().getTime()] = JSON.stringify(fileContent), _a));
        }
        fileContent[new Date().getTime()] = movies;
        return JSON.stringify(fileContent);
    };
    MovieAnalysis.prototype.analysis = function (html, filePath) {
        var movies = this.getMovieInfo(html);
        return this.generateJsonContent(movies, filePath);
    };
    return MovieAnalysis;
}());
exports.MovieAnalysis = MovieAnalysis;
