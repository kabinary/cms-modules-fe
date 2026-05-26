import { Component } from '@angular/core';
import { AppRoutes } from '../../enums/AppRoutes.enum';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly appRoutes = AppRoutes;
  contactEmail: string = 'contact@kabinary.com';
  currentYear: number = new Date().getFullYear();
  tagline: string = 'Premium Joomla modules and extensions, crafted with care.';
}
