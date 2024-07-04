import { Routes } from '@angular/router';

export const authRoute: Routes = [
    
    {
        path: 'login',
        loadComponent:() => import('../auth/pages/login/login.component')
    },
    {
        path: 'dashboard',
        loadChildren:() => import('../dashboard/dashborad.routes').then((r) => r.dashboradRoutes)
    },
  
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
