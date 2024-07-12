import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Feedback } from 'src/app/models/feedback';
import { init, upvote } from 'src/app/store/feedback.actions';

@Component({
  selector: 'app-upvoter-btn',
  templateUrl: './upvoter-btn.component.html',
  styleUrls: ['./upvoter-btn.component.css'],
})
export class UpvoterBtnComponent {
  @Input() count!: number;
  @Input() id!: number;

  constructor(private store: Store<{ feedback: Feedback[] }>) {}

  onClick(event: MouseEvent) {
    event.stopPropagation();
    this.store.dispatch(upvote({ payload: String(this.id) }));
  }
}
