import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreenBarComponent } from './green-bar/green-bar.component';
import { ArticleCardComponent } from './article-card/article-card.component';



@NgModule({
  declarations: [
    GreenBarComponent,
    ArticleCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GreenBarComponent,
    ArticleCardComponent
  ]
})
export class ComponentsModule { }
