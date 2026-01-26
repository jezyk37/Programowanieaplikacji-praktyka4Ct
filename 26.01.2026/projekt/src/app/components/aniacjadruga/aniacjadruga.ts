import { Component } from '@angular/core';

@Component({
  selector: 'app-aniacjadruga',
  standalone: false,
  templateUrl: './aniacjadruga.html',
  styleUrl: './aniacjadruga.css',
})
export class Aniacjadruga {
nazwaanimacji: string = 'animacja Druga - PZSNR 1'
nazwaefektu: string = 'zmiana opacity'
foto: string = 'public/zdjecia/t2.jpg'

opacity: boolean = false;
toggleOpacity(){
  this.opacity = !this.opacity
}
}
