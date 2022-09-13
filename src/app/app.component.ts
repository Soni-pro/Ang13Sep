import { Component } from '@angular/core';
import { CesiumService, MapLayerProviderOptions } from 'angular-cesium';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [CesiumService]
})
export class AppComponent {
  title = 'ang6Sep';
  cesiumLoaded = true;
  Cesium = Cesium;
  choice="";

  selectColor(data){
    this.choice=data.target.value;
  }
  // mapboxStyleImageryProvider = MapLayerProviderOptions.ArcGisMapServer;

  

  
}
