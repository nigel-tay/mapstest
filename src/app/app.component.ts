import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  srcURL = environment.MAPS_API_URL;
  scriptLoaded = false;
  
  constructor(){
    this.appendScript();
  }
  ngOnInit(): void {
    this.loadMap();
  }

  appendScript(){
    const script= document.getElementById('map-script-tag');
    script.setAttribute('src', this.srcURL);
  }

  loadMap() {
    setTimeout(() => {
      this.scriptLoaded = true;
    }, 100)
  }
}
