import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = "Button";
  @Input() type: "Blue" | "Gray" | "Green" = "Blue";
}
