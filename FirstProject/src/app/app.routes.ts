import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "profile",
        loadChildren: () => import('./features/user-profile/user-profile.routes').then(m => m.USER_PROFILE_ROUTES)
    },
    {
        path:"",
        redirectTo : 'profile',
        pathMatch : 'full'
    }
];
