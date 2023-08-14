import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit{
  zoom = 12;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }

  ngOnInit(): void {
    this.getCurrentLocation();
    
  }
  
  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }
 
  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }  

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  onMapClick(event) {
    console.log(event.latLng.toJSON())
    /*
    lat: 
    1.2703146696411247
    lng: 
    103.84762664340819
    */
  }
}
