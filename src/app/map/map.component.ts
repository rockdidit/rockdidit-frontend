import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../../enviroment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  @ViewChild('map') mapElement!: ElementRef;

  ngOnInit() {
    mapboxgl.accessToken = environment.mapboxAccessToken;
  }

  ngAfterViewInit() {
    this.initializeMap();
  }

  initializeMap() {
    const map = new mapboxgl.Map({
      container: this.mapElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11'
    });

    // Add any additional map configuration or customization here
  }

}
