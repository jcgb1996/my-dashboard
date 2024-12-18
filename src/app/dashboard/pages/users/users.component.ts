import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '@services/user.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-users',
  imports: [TitleComponent, RouterModule],
  templateUrl: './users.component.html',
})
export default class UsersComponent {

  public userServices = inject( UserService );


}
