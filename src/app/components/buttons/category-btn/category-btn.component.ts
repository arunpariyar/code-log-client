import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Feedback } from 'src/app/models/feedback';
import { setFilter } from 'src/app/store/feedback.actions';

@Component({
  selector: 'app-category-btn',
  templateUrl: './category-btn.component.html',
  styleUrls: ['./category-btn.component.css'],
})
export class CategoryBtnComponent {
  @Input() category!: string;

  constructor(private store: Store<{ feedback: Feedback[]; filter: string }>) {}

  onClick(event: MouseEvent) {
    event.stopPropagation();
    this.store.dispatch(setFilter({ filter: this.category }));
  }
}
