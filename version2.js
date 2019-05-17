var todos = ["item1", "item2", "item3"]

function displayTodos() {
	console.log(`My todos: ${todos}`)
}

function addTodo(todo) {
	todos.push(todo)
	displayTodos()
}

function changeTodo(position, newValue) {
	todos[position] = newValue
	displayTodos()
}

function deleteTodo(position) {
	// always delete one item at a specific position
	todos.splice(position, 1)
	displayTodos()
}
