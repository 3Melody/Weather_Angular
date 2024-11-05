import { Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { NavigationComponent } from './modules/components/navigation/navigation.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'navigation', component: NavigationComponent
    }
];
