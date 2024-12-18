import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '@interfaces/req-response';
import { delay, map, Observable } from 'rxjs';

interface State  {
  users: User[];
  loadding: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  #state = signal<State >({
    users: [],
    loadding: false
  });

  public users = computed( ()=> this.#state().users  );
  public loading = computed( ()=> this.#state().loadding  );


  #http = inject( HttpClient );

  constructor() {
    console.log('Cargando Data');
    this.#http.get<UsersResponse>('https://reqres.in/api/users?page=2')
    .pipe( delay( 1500 ) )
    .subscribe( resp => {
      this.#state.set({
        users: resp.data ,
        loadding: false
          });
      });
   }

   getUserById(id: string):  Observable<User>{
    return this.#http.get<UserResponse>(`https://reqres.in/api/users/${ id }`)
     .pipe( delay( 1500 ), map( resp => resp.data ) );
    }
}
