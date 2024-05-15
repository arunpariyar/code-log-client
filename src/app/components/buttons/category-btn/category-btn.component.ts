import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-btn',
  templateUrl: './category-btn.component.html',
  styleUrls: ['./category-btn.component.css'],
})
export class CategoryBtnComponent {
  @Input() category!: string;

  onClick(event: MouseEvent) {
    event.stopPropagation();
    alert('need to work on this');
  }
}
