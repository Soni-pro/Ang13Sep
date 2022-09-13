import { Directive, ElementRef, OnInit } from '@angular/core';
import Viewer from 'cesium/Source/Widgets/Viewer/Viewer';

@Directive({
  selector: '[appCesium]'
})
export class CesiumDirective  implements OnInit  {
  // viewer: Viewer;
  constructor(private  el: ElementRef) { }

  ngOnInit() {
    const viewer = new Cesium.Viewer(this.el.nativeElement);
    viewer.dataSources.add(Cesium.GeoJsonDataSource.load('../assets/markerData.geojson', {
      stroke: Cesium.Color.HOTPINK,
      fill: Cesium.Color.PINK,
      strokeWidth: 3,
      markerSymbol: '?'
    }));
  }
  
}
