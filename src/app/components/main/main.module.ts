
import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule } from '@angular/material';

import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        MainRoutingModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterModule
    ],
    declarations: [
        MainComponent
    ]
})
export class MainModule { }
