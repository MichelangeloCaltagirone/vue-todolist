
// Prep
// variabili note
const {createApp} = Vue;

createApp({

    data: () => {
        return {
            todos: [
                {text: 'Fare la spesa', done: false},
                {text: 'Andare in banca', done: true},
                {text: 'Leggere il libro', done: false},
                {text: 'Comprare fermaporta', done: true},
                {text: 'Riordinare lo studio', done: true}
            ],
            newTodo: ''
        }
    },

    methods: {
        createNewTodo(content){
            this.todos.push({text: content, done: false}),
            console.log(this.todos[this.todos.length - 1]),
            this.newTodo = ''
        },

        clearTodo(index){
            console.log(index),
            this.todos.splice(index, 1)
        },
        toggleDone(content){
            content.done = content.done? false : true    
        }
    }

}).mount('#app');