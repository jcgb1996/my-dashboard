import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [CommonModule],
  template: `

  <section [ngClass]="['w-full h-[600px]', cssClas]">
    heavy loader slow
  </section>

  `
})
export class HeavyLoadersSlowComponent {

  @Input( { required: true })
  cssClas!: string;

  constructor() {
    const start = Date.now();
    while(Date.now() - start < 3000){
      console.log('cargado');
    }
  }

}
