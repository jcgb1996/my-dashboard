import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  imports: [CommonModule],
  template: `
  <section [ngClass]="['w-full', cssClas]">
     <ng-content></ng-content>
    </section> `
})
export class HeavyLoadersFastComponent {

   @Input( { required: true })
    cssClas!: string;
}
