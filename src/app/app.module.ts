import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BinaryBoxComponent } from './components/binary-box/binary-box.component';
import { BinaryComponent } from './components/binary/binary.component';

@NgModule({
  declarations: [
    AppComponent,
    BinaryBoxComponent,
    BinaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
