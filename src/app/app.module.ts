import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApiService } from 'src/serive/api.service';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule,
    MatRadioModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
