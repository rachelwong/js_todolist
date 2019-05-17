var todoText
var todoList = {
	todos: [],
	displayTodos: function() {
		debugger
		// === is the strictest and consistent way to compare values
		if (todoList.todos == 0) {
			console.log("There is nothing in your list right now. Add something")
		} else {
			console.log(`My To-dos:`)
			for (var i = 0; i < this.todos.length; i++) {
				if (this.todos[i].completed === true) {
					console.log(`(x) ${this.todos[i].todoText}`)
				} else {
					console.log(`( ) ${this.todos[i].todoText}`)
				}
			}
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
		let todo = this.todos[position] // refers to ONE specific todo in the array of todos initialised above
		todo.completed = !todo.completed
		this.displayTodos()
	},
	toggleAll: function() {
		let totalTodos = this.todos.length
		let completedTodos = 0
		// get number of completedTodos
		for (let i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++
			}
		}
		// case 1 if everything is true, everything is false
		if (completedTodos === totalTodos) {
			//set the completed status of every item in the array in teh todos into false
			for (let i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false
			}
		}
		// case 2: otherwise make everything true
		else {
			for (let i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true
			}
		}
		this.displayTodos()
	}
}

todoList.addTodo("First")
todoList.addTodo("Second")

// access the displayTodosButton
var displayTodosButton = document.getElementById("displayTodosButton")
// run the displayTodos method when pressed
displayTodosButton.addEventListener("click", function() {
	todoList.displayTodos()
})

// access the toggleAll button
var toggleAllButton = document.getElementById("toggleAllButton")

// run the toggleAll method when pressed
toggleAllButton.addEventListener("click", function() {
	todoList.toggleAll()
})
