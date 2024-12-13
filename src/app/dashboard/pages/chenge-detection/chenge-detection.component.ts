import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-chenge-detection',
  imports: [CommonModule, RouterModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <app-title [title]="currentFramerok()"></app-title>

  <pre> {{ frameworksAsSignal() | json  }} </pre>
  <pre> {{ frameworksAsProperty | json    }} </pre>
  `,
})
export default class ChengeDetectionComponent {

  public currentFramerok = computed( () => `Cambio detectado - ${ this.frameworksAsSignal().name }`  );
  public frameworksAsSignal = signal(  {  name: 'Angular', releaseDate: 2016 }  );
  public frameworksAsProperty =  {  name: 'Angular', releaseDate: 2016 }  ;

  constructor(){
      setTimeout(() => {
        //this.frameworksAsProperty.name = 'React';
        this.frameworksAsSignal.update( value=>  ( { ...value, name: 'React'  } )  );
        console.log('cambiado');
      }, 3000);

  };

}
