# Vue Todo list app

## 한번에 설치

```
npm i vue@^2 @babel/polyfill
```

```
npm i -D webpack webpack-cli webpack-dev-server webpack-merge @babel/core @babel/preset-env babel-loader vue-template-compiler vue-loader vue-style-loader css-loader node-sass sass-loader@^7 eslint@^5 babel-eslint eslint-config-standard@^12 eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-plugin-vue html-webpack-plugin copy-webpack-plugin clean-webpack-plugin postcss-loader autoprefixer
```

## 사전 준비

1. node와 npm 설치
2. npm init -y
3. webpack 설치
```
npm install --save-dev webpack
or
npm i -D webpack webpack-cli webpack-dev-server webpack-merge
```
  - webpack은 개발환경에서만 사용되기 때문에 --save-dev 옵션 지정
4. webpack.config.js 파일 생성 및 설정
5. webpack-cli 글로벌 설치
```
npm i -g webpack-cli
```
6. babel 설치, babel은 ES6 이상의 코드를 ES5 이하 버전으로 변환하기 위해 사용
```
npm i -D @babel/core @babel/preset-env babel-loader
```
  - @babel/preset-env를 사용하면 별도 버전 명시하지 않아도 됨
7. .babelrc 파일 생성 및 설정
```
{
  "presets": ["@babel/preset-env"]
}
```
7. 구형 및 일부 브라우저 지원을 위해 @babel/polyfill 설치 (구형 브라우저 지원이 필요 없을 경우 설치 하지 않아도 됨. 리소스를 많이 사용함)
```
npm i @babel/polyfill
```
7. Loader 설치
```
npm i -D vue-loader vue-template-compiler vue-style-loader css-loader
```
8. vue 파일의 자동완성을 위해 추가 플러그인 vetur 설치
9. 브라우저에서 vue를 사용할 수 있도록 vue 모듈 설치
```
npm i vue
```

