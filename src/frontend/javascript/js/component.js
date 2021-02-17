Vue.component('todo-item', {
    // O componente todo-item agora aceita uma
    // "prop", que é como um atributo personalizado.
    // Esta propriedade foi chamada de "todo".
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
        { id: 0, text: 'Vegetais' },
        { id: 1, text: 'Queijo' },
        { id: 2, text: 'Qualquer outra coisa que humanos podem comer' }
        ]
    }
})