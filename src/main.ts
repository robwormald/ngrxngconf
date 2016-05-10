import {bootstrap} from '@angular/platform-browser-dynamic'
import {DemoApp} from './components/app'
import {provideStore} from '@ngrx/store'
import {instrumentStore, Devtools} from '@ngrx/devtools'
import {todos} from './reducers/todos'
import {visibilityFilter} from './reducers/visibilityFilter'

bootstrap(DemoApp, [
	provideStore({todos, visibilityFilter}),
	instrumentStore()
]);
