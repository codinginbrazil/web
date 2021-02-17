// Doc: https://br.vuejs.org/v2/guide/index.html


var app = new Vue({ 
    el: "#app",
    data: {
        message: "Hello Vue!"
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Você carregou esta página em ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    // Condicionais
    el: '#app-3',
    data: {
      seen: false
    }
})

var app4 = new Vue({
    // Laços
    el: '#app-4',
    data: {
      todos: [
        { text: 'Aprender JavaScript' },
        { text: 'Aprender Vue' },
        { text: 'Criar algo incrível' }
      ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
})

var app6 = new Vue({
    // Tratando Interação do Usuário
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
})