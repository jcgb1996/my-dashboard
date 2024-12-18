import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req-response';
import { UserService } from '@services/user.service';
import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [TitleComponent],
  template: `
    <app-title [title]="titleLabel()" ></app-title>
    @if ( user()  ) {

        <section>
          <img srcset="{{ user()!.avatar }}" alt="{{ user()!.first_name }}" />
          <h3>
            {{ user()?.first_name }} {{ user()?.last_name }}
          </h3>
          <p> {{  user()?.email }} </p>
        </section>

    }@else {
      <p> Cargando información </p>
    }
  `
})
export default class UserComponent {

  private route = inject( ActivatedRoute );
  private userServices = inject( UserService );

  //public user = signal<User|undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({id }) =>  this.userServices.getUserById( id ) )
    )
  );
  public titleLabel = computed( ()=> {
    if( this.user() ){
      return `Usuario: ${this.user()?.first_name} ${this.user()?.last_name}`;
    }

    return `Usuario: `;
  } );

  constructor(){
     this.route.params.subscribe( params => console.log( params ) ) ;
  }

}
