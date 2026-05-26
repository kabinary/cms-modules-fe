import { Directive, ElementRef, HostListener } from '@angular/core';
import { ImageLightboxService } from '../components/image-lightbox/image-lightbox.service';

@Directive({
  selector: 'img[appZoomable]',
  standalone: false
})
export class ZoomableDirective {
  constructor(
    private readonly el: ElementRef<HTMLImageElement>,
    private readonly lightbox: ImageLightboxService
  ) {
    this.el.nativeElement.classList.add('cursor-zoom-in');
  }

  @HostListener('click')
  onClick(): void {
    const img = this.el.nativeElement;
    this.lightbox.open(img.src, img.alt);
  }
}
