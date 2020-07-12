import Vue from 'vue' // vue 인스턴스 사용을 위해 import
import App from './App' // 컴포넌트 import, App.vue는 최상위 컴포넌트 (모든 Vue 컴포넌트와 연결되는 컴포넌트)

const vm = new Vue({
  el: '#app',
  // render(createElement) { // callback 함수를 인자로 전달받음
  //     return createElement(App); // callback 함수는 최상위 컴포넌트를 인자로 전달 받음
  // },
  render: h => h(App) // 위 주석내용의 축약형
})
console.log(vm)
