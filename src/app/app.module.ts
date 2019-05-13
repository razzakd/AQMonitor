import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './Header/header.component';
import { AuthenService } from './Auth/auth.service';
import { SensorReadingComponent } from './sensor-reading/sensor-reading.component';
import { AgmCoreModule } from '@agm/core'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SensorReadingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [AuthenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
