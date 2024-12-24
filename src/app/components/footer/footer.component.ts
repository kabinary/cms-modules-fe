import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  contactEmail: string = "contact@xcelerate-future.com";
  currentYear: number = new Date().getFullYear();
}
