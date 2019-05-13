import { Component, OnInit } from '@angular/core';
import { SensorReadingService } from './sensor-reading.service';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-sensor-reading',
  templateUrl: './sensor-reading.component.html',
  styleUrls: ['./sensor-reading.component.css'],
  providers: [SensorReadingService]
})
export class SensorReadingComponent implements OnInit {
  sensorData: any = [];
  lat: any;
  lng: any;
  averageTemperature: number;
  averageHumidity: number;
  airQualityIndicator: string = 'Green';
  humidityUThreshold: number = 30;
  humidityLThreshold: number = 50;
  userLabel = "Group 3 - AQ Watch";
  mapType = 'roadmap';
  constructor(public sensorReadingService: SensorReadingService) { }

  ngOnInit() {
    this.sensorReadingService.GetUserData('Group3AQData.json').subscribe
    (
      (data =>
      {
        this.sensorData.push(data);
        this.lat = -(parseFloat(this.sensorData[0]['Location'][0]["Latitude"]));
        this.lng = (parseFloat(this.sensorData[0]['Location'][0]["Longitude"]));
        this.processAQData(this.sensorData[0]['Location'][1]['AQ']);
      })
    );
  }
  processAQData(sensorData: any) {
    var totalTemperature: number = 0.00;
    var totalHumidity: number = 0.00;
    var dataCount: number = 0;
    sensorData.forEach
    (
      d =>
      {
        dataCount++;
        totalTemperature += parseFloat(d['Temperature']);
        totalHumidity += parseFloat(d['Humidity']);
      }
    );
    this.averageTemperature = Number((totalTemperature / dataCount).toFixed(2));
    this.averageHumidity = Number((totalHumidity / dataCount).toFixed(2));
    if (this.averageHumidity < this.humidityLThreshold)
      this.airQualityIndicator = 'Yellow';
    if (this.averageTemperature >= 20 && this.averageTemperature <= 25 && this.averageHumidity < 55)
      this.airQualityIndicator = 'Red';
  }
  
}
