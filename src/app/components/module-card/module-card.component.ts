import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Module } from '../../models/Module';
import { AppRoutes } from '../../enums/AppRoutes.enum';

@Component({
  selector: 'app-module-card',
  standalone: false,
  
  templateUrl: './module-card.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './module-card.component.css'
})
export class ModuleCardComponent {
  @Input() module: Module | undefined;
}
