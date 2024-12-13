import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule, SidemenuComponent],
  templateUrl: './dashboard.component.html',
})
export default class DashboardComponent {

}
