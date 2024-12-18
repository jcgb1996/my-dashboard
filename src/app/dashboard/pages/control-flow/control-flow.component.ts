import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';


type Grade = 'A'|'B'|'F';

@Component({
  selector: 'app-control-flow',
  imports: [RouterModule, TitleComponent],
  templateUrl: './control-flow.component.html',
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  public frameworks2= signal<string[]>([]);

  public toggleContent() {
    this.showContent.update( value => !value );
    //this.frameworks2.update( value => [...value, 'angular'] );
  }

}
