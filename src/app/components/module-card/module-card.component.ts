import { Component, Input } from '@angular/core';
import { Module } from '../../models/Module';

@Component({
  selector: 'app-module-card',
  standalone: false,
  
  templateUrl: './module-card.component.html',
  styleUrl: './module-card.component.css'
})
export class ModuleCardComponent {
  @Input() module: Module | undefined;
}
