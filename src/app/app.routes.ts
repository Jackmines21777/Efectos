import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.route').then((r) => r.authRoute),
    },
    {
        path:'',
        redirectTo: 'auth',
        pathMatch: 'full'
    }

    // {
    //     path: '',
    //     loadChildren: () => import('./auth/auth.route').then((r) => r.authRoute),
    // },
    // {
    //     path:'',
    //     redirectTo: 'auth',
    //     pathMatch: 'full'
    // }
];
