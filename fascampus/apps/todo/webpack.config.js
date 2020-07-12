// node.js 런타임에 실행됨. 아래는 node.js의 문법으로 작성
const path = require('path') // 경로 지정을 돕기 위해 path 모듈 import
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin') // webpack 빌드 시 index.html을 dist로 추출하기 위한 플러그인
// const CopyPlugin = require('copy-webpack-plugin') // favicon 파일을 webpack 빌드 시 복사하기 위한 플러그인 (windows에서 오류가 발생하여 주석)
require('@babel/polyfill') // import만 하고 사용은 하지 않기 때문에 변수 대입 없음

module.exports = {
    entry: { // webpack 실행 진입점. webpack으로 프로젝트 bundle 실행 시 가장 먼저 실행될 파일 지정
        app: [
            '@babel/polyfill', // 구 브라우저 호환이 필요한 경우 polyfill 지정
            path.join(__dirname, 'main.js') // __dirname은 현재 디렉토리 경로가 담긴 node.js에서 사용되는 전역변수
        ]
    },
    output: { // webpack 실행 후 결과물에 대한 설정
        filename: '[name].js', // webpack 실행 결과물에 app.js 파일에 작성됨, [name]으로 지정하면 entry에 지정한 app 이름이 파일명으로 삽입됨
        path: path.join(__dirname, 'dist') // bundle 결과 파일들이 dist 디렉토리에 생성됨
    },
    module: {
        rules: [{
                // test 내용은 정규 표현식. 양슬래시 사이에 표현식이 들어감.
                // 표현식 안에 dot(.)은 정규표현식에서 문자 하나로 인식되기 때문에 확장자의 .으로 인식시키기 위해 역슬래시 사용
                // 문자열의 끝을 의미하는 $를 마지막에 입력
                // 결과적으로 .vue로 끝나는 파일을 필터링
                test: /\.vue$/, // .vue 확장자를 가진 파일인 경우에는
                loader: 'vue-loader' // vue-loader를 실행
            },
            {
                test: /\.js$/, // .js 확장자를 가진 파일인 경우에는
                exclude: /node_modules/, // node_modules 디렉토리는 webpack 빌드에서 제외
                loader: 'babel-loader' // babel-loader를 실행
            }, {
                test: /\.css$/, // .css 확장자를 가진 파일인 경우에는 아래 use에 정의된 순서대로 loader 사용
                // loader 대신에 use 사용 가능. 최신버전에서는 loader 대신 use 사용 권장
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(), // module이 실행 된 후 추가적인 처리를 Plugin이 담당
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "index.html")
        }),
         // from에 지정한 디렉토리 내 파일들을 to 경로에 복사 (output에 설정한 dist 디렉토리가 기본 디렉토리)
        // new CopyPlugin({
        //     patterns: [{
        //         from: 'assets',
        //         to: 'dist'
        //     }],
        // })
    ]
}