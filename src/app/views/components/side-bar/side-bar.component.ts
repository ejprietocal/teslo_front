import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit, signal, Signal, ViewChild } from '@angular/core';
import { ToggleMenuService } from '../../services/toggle-menu.service';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Drawer } from 'primeng/drawer';

@Component({
  selector: 'app-side-bar',
  imports: [
    CommonModule,
    DrawerModule, ButtonModule, Ripple, AvatarModule, StyleClass
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  public readonly drawerService = inject(ToggleMenuService);


}
