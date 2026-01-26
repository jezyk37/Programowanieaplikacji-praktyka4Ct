import { Component } from '@angular/core';

@Component({
  selector: 'app-ananas',
  standalone: false,
  templateUrl: './ananas.html',
  styleUrl: './ananas.css',
})
export class Ananas {
nazwaanimacji1: string = 'Rotate - x ananasa'
foto1: string = 'public/zdjecia/a1.jpg'

nazwaanimacji2: string = 'Rotate - y ananasa'
foto2: string = 'public/zdjecia/a2.jpg'

nazwaanimacji3: string = 'rotate - 360  ananasa'
foto3: string = 'public/zdjecia/a3.jpg'

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
