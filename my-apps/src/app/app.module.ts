import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumbersBlockComponent } from './numbers-block/numbers-block.component';
import { NumbersItemComponent } from './numbers-item/numbers-item.component';
import { MainGalleryBlockComponent } from './main-gallery-block/main-gallery-block.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NumbersBlockComponent,
    NumbersItemComponent,
    MainGalleryBlockComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
