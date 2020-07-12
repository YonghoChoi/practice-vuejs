// node.js 런타임에 실행됨. 아래는 node.js의 문법으로 작성
const path = require('path')    // 경로 지정을 돕기 위해 path 모듈 import

module.exports = {
    entry: { // webpack 실행 진입점. webpack으로 프로젝트 bundle 실행 시 가장 먼저 실행될 파일 지정
        app: path.join(__dirname, 'main.js')    // __dirname은 현재 디렉토리 경로가 담긴 node.js에서 사용되는 전역변수
    },
    output: { // webpack 실행 후 결과물에 대한 설정
        filename: '[name].js', // webpack 실행 결과물에 app.js 파일에 작성됨, [name]으로 지정하면 entry에 지정한 app 이름이 파일명으로 삽입됨
        path: path.join(__dirname, 'dist')  // bundle 결과 파일들이 dist 디렉토리에 생성됨
    },
    module: {},
    plugins: []
}