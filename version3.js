// TodoLIst object has a todos property that is an array of items
var todoList = {
	todos: ["item 1", "item 2", "item 3"],
	displayTodos: function() {
		console.log(`My todos:`, this.todos)
	},
	addTodo: function(todo) {
		// refers to the array
		this.todos.push(todo)
		// refer back to its own property-function
		this.displayTodos()
	},
	changeTodo: function(position, newValue) {
		this.todos[position] = newValue
		this.displayTodos()
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1)
		this.displayTodos()
	}
}
// prints the items in the todoList
todoList.displayTodos()
todoList.addTodo("hello this is new")
todoList.changeTodo(0, "I am new new")
todoList.changeTodo(2, "I am more new than you")
todoList.deleteTodo(1)
