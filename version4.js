var todoText
var todoList = {
	todos: [],
	displayTodos: function() {
		if (todoList.todos == 0) {
			console.log("There is nothing in your list right now. Add something")
		} else {
			console.log("My current todos: ", this.todos) // prints out the array as a string
		}
	},
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false // false by default as incomplete
		})
	},
	changeTodo: function(position, todoText) {
		// this.todos[position] is an object
		this.todos[position].todoText = todoText
		this.displayTodos()
	},
	deleteTodo: function(positon) {
		this.todos.splice(position, 1)
		this.displayTodos()
	},
	toggleCompleted: function(position) {
		// this changes the status of the completed when it is toggled.
		var todo = this.todos[position] // refers to ONE specific todo in the array of todos initialised above
		todo.completed = !todo.completed
		this.displayTodos()
	}
}

todoList.addTodo("I am the first one")
todoList.displayTodos()
