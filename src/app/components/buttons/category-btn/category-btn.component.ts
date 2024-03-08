import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-btn',
  templateUrl: './category-btn.component.html',
  styleUrls: ['./category-btn.component.css'],
})
export class CategoryBtnComponent {
  @Input() category!: string;
}
