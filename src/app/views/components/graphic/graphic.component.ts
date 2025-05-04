import { Component, Input, OnInit } from '@angular/core';
import { Graphic } from 'src/app/interfaces/graphic';

@Component({
  selector: 'app-graphic',
  imports: [],
  templateUrl: './graphic.component.html',
  styleUrl: './graphic.component.css'
})
export class GraphicComponent  {

  @Input() items: Graphic[] = [];


}
