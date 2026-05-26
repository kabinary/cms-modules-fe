import { Component, Input } from '@angular/core';

export type ButtonType =
  | 'Primary' | 'Secondary' | 'Ghost' | 'GhostDark'
  | 'Signal' | 'Success' | 'Danger'
  // Legacy aliases (kept for backward compat across templates)
  | 'Blue' | 'Gray' | 'Green';

export type ButtonSize = 'sm' | 'md' | 'lg';

const LEGACY_MAP: Record<string, string> = {
  Blue: 'secondary',
  Gray: 'ghost',
  Green: 'primary',
};

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = 'Button';
  @Input() type: ButtonType = 'Primary';
  @Input() size: ButtonSize = 'md';

  get variantClass(): string {
    const key = LEGACY_MAP[this.type] ?? this.type.replace(/([A-Z])/g, (_, c, i) => (i === 0 ? c.toLowerCase() : '-' + c.toLowerCase()));
    return `btn-${key}`;
  }

  get sizeClass(): string {
    return `btn-${this.size}`;
  }
}
