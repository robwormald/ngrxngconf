export interface Todo {
	id?:number;
	text?:string;
	completed?:boolean;
}

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

let nextTodoId = 0;

export function todos(allTodos = [], action) {
 switch(action.type){
   case ADD_TODO:
     return allTodos.concat([Object.assign({}, action.payload, {id: nextTodoId++, completed: false})]);
   case DELETE_TODO:
     return allTodos.filter(todo => todo.id !== action.payload.id);
   case UPDATE_TODO:
     return allTodos.map(todo => {
       return todo.id === action.payload.id ?
         Object.assign({}, todo, action.payload) : todo;
     });
    default:
      return allTodos;
 };
}
