import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upvoter-btn',
  templateUrl: './upvoter-btn.component.html',
  styleUrls: ['./upvoter-btn.component.css'],
})
export class UpvoterBtnComponent {
  @Input() count!: string;
}
