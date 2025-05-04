import { Component, Input } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-collapsible-panel',
  standalone: false,
  
  templateUrl: './collapsible-panel.component.html',
  styleUrl: './collapsible-panel.component.css'
})
export class CollapsiblePanelComponent {
  @Input() title: string = 'Panel Title';
  @Input() open: boolean = false;

  toggle() {
    this.open = !this.open;
  }
}
