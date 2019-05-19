var todoList = {
	todos: [],
	displayTodos: function() {
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
		// this.displayTodos()
	},
	changeTodo: function(position, todoText) {
		// this.todos[position] is an object
		this.todos[position].todoText = todoText
		this.displayTodos()
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1)
		// this.displayTodos()
	},
	toggleCompleted: function(position) {
		// this changes the status of the completed when it is toggled.
		let todo = this.todos[position] // refers to ONE specific todo in the array of todos initialised above
		todo.completed = !todo.completed
		// this.displayTodos()
	},
	toggleAll: function() {
		let totalTodos = this.todos.length
		let completedTodos = 0

		this.todos.forEach(function(todo) {
			if (todo.completed === true) {
				completedTodos++
			}
		})

		// ** NEW VERSION  **//
		this.todos.forEach(function(todo) {
			// Case 1: if everything is true, make everything false
			if (completedTodos === totalTodos) {
				todo.completed = false
				// Case 2: if everything is false, make everything true
			} else {
				todo.completed = true
			}
		})
		// ** NEW VERISON ENDS **//
		// this.displayTodos()
	}
}

var handlers = {
	// all methods that handle different events goes here
	displayTodos: function() {
		todoList.displayTodos()

		view.displayTodos() // added to display onto the page
	},
	toggleAll: function() {
		todoList.toggleAll()

		view.displayTodos() // added to display onto the page
	},
	addTodo: function() {
		//grab user text input from the text box
		var addTodoTextInput = document.getElementById("addTodoTextInput")
		todoList.addTodo(addTodoTextInput.value)

		addTodoTextInput.value = ""

		view.displayTodos() // added to display onto the page
	},
	changeTodo: function() {
		// create variables of the two input fields (index and also the content to change)
		var changeTodoPositionInput = document.getElementById("changeTodoPositionInput")
		var changeTodoTextInput = document.getElementById("changeTodoTextInput")

		// change the to do of a specific index position provided
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)

		//clear the fields
		changeTodoPositionInput.value = ""
		changeTodoTextInput.value = ""

		view.displayTodos() // added to display onto the page
	},
	deleteTodo: function(position) {
		todoList.deleteTodo(position)
		deleteTodoPositionInput = ""

		view.displayTodos() // added to display onto the page
	},
	toggleCompleted: function() {
		var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput")
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber)
		toggleCompletedPositionInput = ""

		view.displayTodos() // added to display onto the page
	}
}
var view = {
	displayTodos: function() {
		// don't need to create a new one every time in the for loop
		var todosUl = document.querySelector("ul")

		todosUl.innerHTML = ""
		todoList.todos.forEach(function(todo, position) {
			var todoLi = document.createElement("li")
			var todoTextWithCompletion = "" // full todo text with completion

			if (todo.completed === true) {
				todoTextWithCompletion = "(x)" + todo.todoText
			} else {
				todoTextWithCompletion = "( )" + todo.todoText
			}

			todoLi.id = position // for each item, create an id to identify it with
			todoLi.textContent = todoTextWithCompletion
			todoLi.appendChild(this.createDeleteButton())
			todosUl.appendChild(todoLi)
		}, this)
	},
	createDeleteButton: function() {
		//create a delete button and return it
		var deleteButton = document.createElement("button")
		deleteButton.textContent = "Delete"
		deleteButton.className = "deleteButton" // assign a class to the button element
		return deleteButton
	},

	setUpEventListeners: function() {
		var todosUl = document.querySelector("ul")
		todosUl.addEventListener("click", function(event) {
			console.log(event.target.parentNode.id) // prints the id of the li
			var elementClicked = event.target

			if (elementClicked.className === "deleteButton") {
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id))
			}
		})
	}
}

view.setUpEventListeners()
