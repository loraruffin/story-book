import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryComponent } from './story.component';
import { RouterModule } from '@angular/router';
import { StoryRoutingModule } from '@components/story/story-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoryRoutingModule
  ],
  declarations: [
    StoryComponent
  ],
  providers: []
})
export class StoryModule { }
