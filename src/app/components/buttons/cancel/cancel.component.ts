import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css'],
})
export class CancelComponent {
  @Input() text!: string;
}
