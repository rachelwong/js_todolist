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
		// this.displayTodos()
	}
}

// access the displayTodosButton
// var displayTodosButton = document.getElementById("displayTodosButton")
// // run the displayTodos method when pressed
// displayTodosButton.addEventListener("click")

// // access the toggleAll button
// var toggleAllButton = document.getElementById("toggleAllButton")

// // run the toggleAll method when pressed
// toggleAllButton.addEventListener("click")

// want methods in this object to handle different events
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
		// debugging - console.log("addTodo firing")
		// feed the input into the addToDo method
		// .value is essential (turns into a string)
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
		// Modified for a eventlistener
		// create variable of the delete position, which is also the id
		// var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput") // replaced by the event.target.id

		// runs the deleteTodo method passing through the position index of the item
		// todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber)
		todoList.deleteTodo(position)
		// clear the delete index field once submitted
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

// this is reponsible for what the user sees
// no logic, only takes todo array and displays to screen
var view = {
	displayTodos: function() {
		// don't need to create a new one every time in the for loop
		var todosUl = document.querySelector("ul")

		// clears the unordered list before adding li elements
		todosUl.innerHTML = ""

		// if todos have zero items, then nothing will be done
		// if have five items, then do five things
		for (var i = 0; i < todoList.todos.length; i++) {
			var todoLi = document.createElement("li")
			var todoTextWithCompletion = "" // full todo text with completion
			var todo = todoList.todos[i] // each element in the todolist

			if (todo.completed === true) {
				todoTextWithCompletion = "(x)" + todo.todoText
			} else {
				todoTextWithCompletion = "( )" + todo.todoText
			}
			todoLi.id = i // for each item, create an id to identify it with
			todoLi.textContent = todoTextWithCompletion
			todoLi.appendChild(this.createDeleteButton())
			todosUl.appendChild(todoLi)

			// the content of each li is each element in the todoList objects's todos array's todoText property
			// todoLi.textContent = todoList.todos[i].todoText
		}
	},
	createDeleteButton: function() {
		//create a delete button and return it
		var deleteButton = document.createElement("button")
		deleteButton.textContent = "Delete"
		deleteButton.className = "deleteButton" // assign a class to the button element
		return deleteButton
	},

	setUpEventListeners: function() {
		// this has to be pointing to a ul, not an li
		// intialise to use outside of view variable
		var todosUl = document.querySelector("ul")
		//this is only firing when the delete button is clicked
		// thsi listens for all clicks to the unordered list
		// use the event obj to figure out which item was clicked
		// listen for clicks to the parent element (ul) which then delegates to the li to respond
		todosUl.addEventListener("click", function(event) {
			// the event.target is the button that is clicked on
			// .parentNode goes up one level from event.target which is the li
			console.log(event.target.parentNode.id) // prints the id of the li

			//get the element that was clicked on
			var elementClicked = event.target

			// check that the element clicked really is the delete button
			if (elementClicked.className === "deleteButton") {
				// delete the item and passing through a position
				// parseInt isn't necessary but put it in just in case
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id))
			}
		})
	}
}

// Event Delegation
// listening for a single element, any element inside it rather
// this will set up the view object to listen passively until click happens
view.setUpEventListeners()
