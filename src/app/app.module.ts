import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Mainapp } from '../mainapp/mainapp.component';
import { Header } from '../header/header.component';
import { Footer } from '../footer/footer.component';
import { UserData } from '../shared/userdata.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, Mainapp, Header, Footer],
  imports: [BrowserModule, FormsModule],
  providers: [UserData],
  bootstrap: [AppComponent],
})
export class AppModule {}
