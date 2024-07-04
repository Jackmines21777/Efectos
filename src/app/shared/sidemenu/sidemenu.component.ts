import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { dashboradRoutes } from '../../dashboard/dashborad.routes';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidemenu.component.html',
})
export default class SidemenuComponent {

  public menuItems = dashboradRoutes
    .map((dashboradRoutes) => dashboradRoutes.children ?? [] )
    .flat()
    .filter((dashboradRoutes => dashboradRoutes && dashboradRoutes.path))
    .filter((dashboradRoutes) => !dashboradRoutes.path?.includes(':'));

  


    constructor(){
      console.log('sidemenu component');
    }

}
