import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements AfterViewInit {

  @ViewChild('mapa')
  mapaRef: ElementRef<HTMLElement> | undefined;
  mapa: GoogleMap | undefined;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.createMap();
  }

  async createMap() {
    if (this.mapaRef) {
      this.mapa = await GoogleMap.create({
        id: 'my-cool-map',
        element: this.mapaRef.nativeElement,
        apiKey: environment.googleMapsApiKey,
        config: {
          center: {
            lat: 40.5693226,
            lng: -4.2784812
          },
          zoom: 8,
        },
      });
    } else {
      console.log("error")
    }
  }

}
