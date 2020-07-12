module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2015, // ES6
    sourceType: "module",
  },
  env: {
    // 환경변수 사용 여부
    browser: true,
    node: true,
  },
  extends: [
    "standard",
    "plugin:vue/essential", // Vue 규칙을 위한 다양한 종류의 플러그인이 존재하지만 너무 엄격하면 개발 생산성이 떨어질 수 있기 때문에 조금 여유롭게 essential로 지정
  ],
  plugins: ["vue"],
  rules: {
    // 커스텀하게 린팅 규칙을 변경하고자 하는 경우 예외 규칙으로 등록
    "no-new": 0, // 0 : 사용안함, 1 : 검출된 경우 에러, 2 : 검출된 경우 경고
  },
};