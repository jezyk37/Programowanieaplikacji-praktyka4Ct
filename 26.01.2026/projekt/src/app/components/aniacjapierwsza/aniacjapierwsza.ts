import { Component } from '@angular/core';

@Component({
  selector: 'app-aniacjapierwsza',
  standalone: false,
  templateUrl: './aniacjapierwsza.html',
  styleUrl: './aniacjapierwsza.css',
})
export class Aniacjapierwsza {
nazwaanimacji: string = 'animacja Pierwsza - PZSNR 1'
nazwaefektu: string = 'powiekszenie zoom'
foto: string = 'public/zdjecia/t1.jpg'

zoom: boolean = false;
toggleZoom(){
  this.zoom = !this.zoom
}

}
