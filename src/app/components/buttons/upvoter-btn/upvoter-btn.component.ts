import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upvoter-btn',
  templateUrl: './upvoter-btn.component.html',
  styleUrls: ['./upvoter-btn.component.css'],
})
export class UpvoterBtnComponent {
  @Input() count!: number;

  onClick(event: MouseEvent) {
    event.stopPropagation();
    alert('need to work on this');
  }
}
