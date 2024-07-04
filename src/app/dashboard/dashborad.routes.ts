import { Routes } from '@angular/router';

export const dashboradRoutes: Routes = [
    {
        path:'dashboard',
        loadComponent: () => import('./dashboard.component'),
        children: [

            {
                path:'acronimo',
                title:'Acronimo',
                loadComponent: () => import('./pages/acronimo/acronimo.component'),
            },

            {
                path:'Card-Hover',
                title: 'Card-Hover',
                loadComponent: () => import('./pages/card-hover/card-hover.component'),
            },

            {
                path:'Card-Hover-2',
                title: 'Card-Hover-2',
                loadComponent: () => import('./pages/card-hover-2/card-hover-2.component'),
            },

            {
                path:'Carrusel',
                title:'Carrusel',
                loadComponent: () => import('./pages/carrusel/carrusel.component'),
            },

            {
                path:'Carrusel-2',
                title:'Carrusel-2',
                loadComponent: () => import('./pages/carrusel-2/carrusel-2.component'),
            },

            {
                path:'Cartas',
                title:'Cartas',
                loadComponent: () => import('./pages/cartas/cartas.component'),
            },

            {
                path:'Cartas Perfiles',
                title:'Cartas Perfiles',
                loadComponent: () => import('./pages/cartas-perfiles/cartas-perfiles.component'),
            },
    

            {
                path:'Gallery-grid',
                title:'Galeria Grid',
                loadComponent: () => import('./pages/gallery-grid/gallery-grid.component'),
            },
            {
                path:'Gray Scale',
                title:'Gray Scale',
                loadComponent: () => import('./pages/gray-scale/gray-scale.component'),
            },
        
            {
                path:'integrantes',
                title:'Integrantes',
                loadComponent: () => import('./pages/integrantes/integrantes.component'),
            },

            {
                path:'Imagen Responsiva',
                title:'Imagen Responsiva',
                loadComponent: () => import('./pages/imagen-responsiva/imagen-responsiva.component'),
            },

            {
                path:'Loading',
                title:'Cargando',
                loadComponent: () => import('./pages/loading/loading.component'),
            },

            {
                path:'Menu-Hover',
                title:'Menu Hover',
                loadComponent: () => import('./pages/menu-hover/menu-hover.component'),
            },

            {
                path:'Navbar',
                title:'Navbar',
                loadComponent: () => import('./pages/navbar/navbar.component'),
            },

            {
                path:'slider',
                title:'Slide',
                loadComponent: () => import('./pages/slider/slider.component'),
            },

            {
                path:'slider-2',
                title:'Slider-2',
                loadComponent: () => import('./pages/slider-2/slider-2.component'),
            },

            {
                path:'swiper',
                title:'swiper',
                loadComponent: () => import('./pages/swiper/swiper.component'),
            },

            {
                path:'titulo',
                title:'Titulo',
                loadComponent: () => import('./pages/titulo/titulo.component'),
            },

            {
                path:'Titulo Agua',
                title:'Titulo Agua',
                loadComponent: () => import('./pages/titulo-agua/titulo-agua.component'),
            },

            {
                path: '',
                redirectTo: 'aaa',
                pathMatch: 'full',
            }
        ]
            
        },

        {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full',
        }
    
];
