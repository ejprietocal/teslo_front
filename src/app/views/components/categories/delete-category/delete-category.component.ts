import { Component, Input, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-delete-category',
  imports: [],
  templateUrl: './delete-category.component.html',
  styleUrl: './delete-category.component.css'
})
export class DeleteCategoryComponent {
  @Input({ required : true }) actionCreateCategor! : WritableSignal<boolean>;
}
