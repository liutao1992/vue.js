var app = new Vue({
  el: '#app',
  data: {
    message: 'hello vue!'
  }
});

var app2 = new Vue({
    el:'#app-2',
    data: {
      message: '页面加载于 ' + new Date().toLocaleDateString()
    }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen : true
  }
})