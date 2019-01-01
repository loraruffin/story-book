import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule, routing } from './app.routing';
import { MainModule } from '@components/main/main.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        MainModule,
        routing,
        CommonModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }