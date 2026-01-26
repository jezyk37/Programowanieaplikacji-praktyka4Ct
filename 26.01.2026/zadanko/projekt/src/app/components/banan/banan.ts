import { Component } from '@angular/core';

@Component({
  selector: 'app-banan',
  standalone: false,
  templateUrl: './banan.html',
  styleUrl: './banan.css',
})
export class Banan {
nazwaanimacji1: string = 'Blur Banan'
foto1: string = 'public/zdjecia/b1.jpg'

nazwaanimacji2: string = 'Scale Banan'
foto2: string = 'public/zdjecia/b2.jpg'

nazwaanimacji3: string = 'Tilt Banan'
foto3: string = 'public/zdjecia/b3.jpg'

animacja1: boolean = false;
toggleAnimacja1(){
  this.animacja1 = !this.animacja1
}

animacja2: boolean = false;
toggleAnimacja2(){
  this.animacja2 = !this.animacja2
}

animacja3: boolean = false;
toggleAnimacja3(){
  this.animacja3 = !this.animacja3
}
}
