import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageDrawingModule } from 'ngx-image-drawing';
import { AppComponent } from './app.component';
import { DrawOnImageComponent } from './sketchpad/draw-on-image.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawOnImageComponent
  ],
  imports: [
    BrowserModule,
    ImageDrawingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
