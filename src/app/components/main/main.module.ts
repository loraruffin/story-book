
import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule } from '@angular/material';


import { MainComponent } from './main.component';


@NgModule({
    imports: [
        MainRoutingModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    declarations: [
        MainComponent
    ]

})
export class MainModule { }
