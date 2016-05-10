import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core'
import {MD_CARD_DIRECTIVES} from '@angular2-material/card'
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input'
import {MD_LIST_DIRECTIVES} from '@angular2-material/list'
import {MdCheckbox} from '@angular2-material/checkbox'
import {MdButton} from '@angular2-material/button'

@Component({
  selector: 'todo-list',
  template: `
	  <md-card>
        <md-list>
          <md-list-item *ngFor="let todo of todos">
		    <md-checkbox [checked]="todo.completed" (change)="setStatus($event, todo)"></md-checkbox>
		  {{todo.text}}</md-list-item>
	    </md-list>
	  </md-card>
	`,
  directives: [MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_LIST_DIRECTIVES, MdButton, MdCheckbox],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoList {
  newTodoText: string = '';
  @Output() action = new EventEmitter();
  @Input() todos = [];
  setStatus(completed, todo) {
    this.action.emit({
      type: 'UPDATE_TODO',
      payload: Object.assign({}, todo, { completed })
    });
  }
}
