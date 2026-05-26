import { Injectable, signal } from '@angular/core';

export interface ImageLightboxState {
  open: boolean;
  src: string;
  alt: string;
}

@Injectable({ providedIn: 'root' })
export class ImageLightboxService {
  readonly state = signal<ImageLightboxState>({ open: false, src: '', alt: '' });

  open(src: string, alt: string): void {
    this.state.set({ open: true, src, alt });
  }

  close(): void {
    this.state.set({ open: false, src: '', alt: '' });
  }
}
