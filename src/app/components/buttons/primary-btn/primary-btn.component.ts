import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-btn',
  templateUrl: './primary-btn.component.html',
  styleUrls: ['./primary-btn.component.css'],
})
export class PrimaryBtnComponent {
  @Input() text!: string;
}
