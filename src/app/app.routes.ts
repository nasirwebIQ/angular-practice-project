import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    // { path: '', component: HomeComponent},
    // {path: 'about', component: AboutComponent}

    // slow loding
    {
        path: "",
        loadComponent:()=>import('./home/home.component').then((c)=>HomeComponent)

    },
    {
        path: "about",
        loadComponent:()=>import('./components/about/about.component').then((c)=>AboutComponent)
    },
    {
        path: "admin",
        loadComponent:()=>import('./admin/admin.component').then((c)=>AdminComponent)
    }
];
