import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HeaderComponent } from './Header/header.component';
import { SensorReadingComponent } from './sensor-reading/sensor-reading.component';

const appRoutes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'sensor-reading', component: SensorReadingComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
