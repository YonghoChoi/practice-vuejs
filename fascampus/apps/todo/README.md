# Vue Todo list app

## 한번에 설치

```
npm i vue@^2 @babel/polyfill
```

```
npm i -D webpack webpack-cli webpack-dev-server webpack-merge @babel/core @babel/preset-env babel-loader vue-template-compiler vue-loader vue-style-loader css-loader node-sass sass-loader@^7 eslint@^5 babel-eslint eslint-config-standard@^12 eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-plugin-vue html-webpack-plugin copy-webpack-plugin clean-webpack-plugin postcss-loader autoprefixer
```

## 사전 준비

### node와 npm

1. node와 npm 설치
2. npm init -y 명령으로 초기 package.json 파일 생성


### webpack 관련 설치

1. webpack 설치
```
npm i -D webpack webpack-cli webpack-dev-server webpack-merge
```
  - webpack은 개발환경에서만 사용되기 때문에 --save-dev 옵션 지정
  - 글로벌로 webpack 명령을 사용하고자 할 경우 아래 명령으로 실행
  ```
  npm i -g webpack webpack-cli
  ```

### Babel 관련 설치
babel은 ES6 이상의 코드를 ES5 이하 버전으로 변환하기 위해 사용
1. 설치
```
npm i -D @babel/core @babel/preset-env babel-loader
```
  - @babel/preset-env를 사용하면 별도 버전 명시하지 않아도 됨
2. .babelrc 파일 생성 및 설정
```
{
  "presets": ["@babel/preset-env"]
}
```
3. 구형 및 일부 브라우저 지원을 위해 @babel/polyfill 설치 (구형 브라우저 지원이 필요 없을 경우 설치 하지 않아도 됨. 리소스를 많이 사용함)
```
npm i @babel/polyfill
```

### Vue 관련 설치
1. Loader 설치
```
npm i -D vue-loader vue-template-compiler vue-style-loader css-loader
```
2. vue 파일의 자동완성을 위해 추가 플러그인 vetur 설치
3. 브라우저에서 vue를 사용할 수 있도록 vue 모듈 설치
```
npm i vue
```
4. 변경사항 즉시 반영하여 확인해볼 수 있도록 webpack dev sever 설치
```
npm i -D webpack-dev-server
```
  - -D 옵션을 사용했기 때문에 CLI에서는 사용이 불가능하고 package.json파일의 scripts 설정에 지정해야함


### SCSS 관련 설치
SCSS는 CSS 전처리 용도로 사용
1. scss 사용을 위한 로더와 node에서 sass 사용을 위한 node-sass 설치
```
npm i -D sass-loader node-sass
```
2. webpack 설정의 rule 추가

### POST CSS 관련 설치
1. POST CSS 처리를 위한 모듈 설치
```
npm i -D postcss-loader autoprefixer
```
2. packages js에 설정 추가
```
{
  "browserslist": [
    "last 2 versions", // 최신 브라주의 마지막 두번째 버전
    "ie >= 10"  // 인터넷익스플로러 10버전 이상
  ]
}
```
3. webpack 설정의 rule 추가

### ESLint 설치

1. module 지정
```
npm i -D eslint@^5 babel-eslint eslint-config-standard@^12 eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-plugin-vue
```
2. package.json 파일에 내용 추가
```
{
  "lint": "eslint --ext .js,.vue .",
  "lint:fix": "eslint --fix --ext .js,.vue ."
}
```
- 검사와 수정까지 eslint가 하도록 설정
3. lint 실행
```
npm run lint
```

### 실행
1. dev 모드로 실행
```
npm run dev
```
2. production 모드로 실행
```
npm run build
```