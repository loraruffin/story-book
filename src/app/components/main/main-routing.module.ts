import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: MainComponent,
                children: [
                    {
                        path: '',
                        loadChildren: '@components/story/story.module#StoryModule'
                    }
                ]
            }
        ])
    ]
})
export class MainRoutingModule { }
