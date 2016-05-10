import {Todo} from '../reducers/todos'
export {Todo}

import {Observable} from 'rxjs/Rx'

export interface AppState {
	todos:Todo[];
	visibilityFilter: string;
}
