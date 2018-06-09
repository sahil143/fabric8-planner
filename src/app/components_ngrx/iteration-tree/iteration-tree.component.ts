import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import { IterationUI } from '../../models/iteration.model';
import { IterationListEntryComponent } from '../iteration-list-entry/iteration-list-entry.component';

@Component({
    selector: 'iteration-tree',
    templateUrl: './iteration-tree.component.html'
})

export class IterationTreeComponent {

  @Input() iterationList: IterationUI[] = [];
  @Input() collection: any;
  @Input() witGroup: string = '';
  @Input() showTree: string = '';
  @Input() showCompleted: string = '';

  @Output() onEditIteration = new EventEmitter<IterationUI>();
  @Output() onCloseIteration = new EventEmitter<IterationUI>();
  @Output() onCreateIteration = new EventEmitter<IterationUI>();

  editIteration(iteration) {
    this.onEditIteration.emit(iteration);
  }

  closeIteration(iteration) {
    this.onCloseIteration.emit(iteration);
  }

  createIteration(iteration) {
    this.onCreateIteration.emit(iteration);
  }
}
