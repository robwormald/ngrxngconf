import {Component} from '@angular/core'
import {Devtools} from '@ngrx/devtools'
import {Store} from '@ngrx/store'
import {MdToolbar} from '@angular2-material/toolbar'
import {Observable} from 'rxjs/Rx'
import {Todo} from '../reducers/todos'

import {AppState} from '../services/state'
import {TodoList} from './todo-list'
import {NewTodo} from './new-todo'
import {VisibilityFilter} from './visibility-filter'
import {filterVisibleTodos} from '../selectors/filterVisibleTodos'


@Component({
	selector: 'demo-app',
	template: `
	  <div>
    <ngrx-devtools></ngrx-devtools>
		<md-toolbar>@ngrx demo</md-toolbar>
		<new-todo (action)="store.dispatch($event)"></new-todo>
		<visibility-filter [activeFilter]="visibilityFilter | async" (action)="store.dispatch($event)"></visibility-filter>
		<br>
		<todo-list [todos]="todos | async" (action)="store.dispatch($event)"></todo-list>
	  </div>
	`,
	directives: [Devtools, TodoList, NewTodo, MdToolbar, VisibilityFilter]
})
export class DemoApp {
	todos: Observable<Todo[]>
	visibilityFilter: Observable<string>;
	constructor(public store:Store<AppState>){
    this.todos = store.select(state => state.todos);



  }
}
