import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core'
import {MD_CARD_DIRECTIVES} from '@angular2-material/card'
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input'
import {MdButton} from '@angular2-material/button'

@Component({
	selector: 'visibility-filter',
	template: `
	  <md-card>
      <button md-button [color]="activeFilter === 'SHOW_ALL' ? 'accent' : null" (click)="setFilter('SHOW_ALL')">All</button>
      <button md-button [color]="activeFilter === 'COMPLETED' ? 'accent' : null" (click)="setFilter('COMPLETED')">Completed</button>
      <button md-button [color]="activeFilter === 'PENDING' ? 'accent' : null" (click)="setFilter('PENDING')">Pending</button>
	  </md-card>
	`,
	directives: [MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, MdButton]
})
export class VisibilityFilter {
	@Output() action = new EventEmitter();
	@Input() activeFilter = 'ALL';
	setFilter(visibilityFilter){
		this.action.emit({
			type: 'SET_VISIBILITY_FILTER',
			payload: visibilityFilter
		});
	}
}
