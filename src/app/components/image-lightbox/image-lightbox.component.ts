import { Component, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { ImageLightboxService } from './image-lightbox.service';

@Component({
  selector: 'app-image-lightbox',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './image-lightbox.component.html'
})
export class ImageLightboxComponent {
  readonly state;

  constructor(private readonly lightbox: ImageLightboxService) {
    this.state = lightbox.state;
  }

  close(): void {
    this.lightbox.close();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.state().open) {
      this.close();
    }
  }
}
