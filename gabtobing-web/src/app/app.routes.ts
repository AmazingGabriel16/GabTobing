import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'about-me', component: AboutMePageComponent}
];
