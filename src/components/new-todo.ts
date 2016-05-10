import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core'
import {MD_CARD_DIRECTIVES} from '@angular2-material/card'
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input'
import {MdButton} from '@angular2-material/button'

@Component({
  selector: 'new-todo',
  template: `
	  <md-card>
		  <md-card-content>
		    <md-input placeholder="Enter new todo" [(ngModel)]="newTodoText"></md-input>
			<button md-button (click)="addTodo()">Add</button>
		  </md-card-content>
		</md-card>
	`,
  directives: [MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, MdButton]
})
export class NewTodo {
  newTodoText: string = '';
  @Output() action = new EventEmitter();
  addTodo() {
    this.action.emit({ type: 'ADD_TODO', payload: { text: this.newTodoText } });
    this.newTodoText = '';
  }
}
