import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empty-display',
  templateUrl: './empty-display.component.html',
  styleUrls: ['./empty-display.component.css'],
})
export class EmptyDisplayComponent {
  constructor(private router: Router) {}
  navigateToForm() {
    this.router.navigate(['/feedback']);
  }
}
