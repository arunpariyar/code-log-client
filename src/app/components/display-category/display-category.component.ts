import { Component } from '@angular/core';

@Component({
  selector: 'app-display-category',
  templateUrl: './display-category.component.html',
  styleUrls: ['./display-category.component.css'],
})
export class DisplayCategoryComponent {
  catagories = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
}
