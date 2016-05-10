export const filterVisibleTodos = (todos = [], visibilityFilter) => {
	switch (visibilityFilter) {
		case 'SHOW_ALL':
	      return todos;
		case 'ACTIVE':
	      return todos.filter(todo => !todo.completed);
	    case 'COMPLETED':
	      return todos.filter(todo => todo.completed);
	}
}
