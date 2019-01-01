import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { MainComponent } from '@components/main/main.component';


const appRoutes: Routes = [
    {
        path: '',
        loadChildren: '@components/main/main.module#MainModule'
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: []
})
export class AppRoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

