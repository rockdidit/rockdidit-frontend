import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  environment = {
    production: false,
    mapboxAccessToken: 'pk.eyJ1IjoiZmFiZXRvMTAiLCJhIjoiY2xqN2M2ZWQ0MDdvazNlcDF4dG9yZ3YwaSJ9.SPBZf3CxxhxYQSG8qZNyjg'
  };


  @ViewChild('map') mapElement!: ElementRef;

  ngOnInit() {
    (mapboxgl as typeof mapboxgl).accessToken = this.environment.mapboxAccessToken;
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
