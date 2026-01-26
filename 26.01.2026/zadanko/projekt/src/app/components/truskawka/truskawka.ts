import { Component } from '@angular/core';

@Component({
  selector: 'app-truskawka',
  standalone: false,
  templateUrl: './truskawka.html',
  styleUrl: './truskawka.css',
})
export class Truskawka {
nazwaanimacji1: string = 'Hue-Rotate Truskawka'
foto1: string = 'public/zdjecia/t1.jpg'

nazwaanimacji2: string = 'SkewX Truskawka'
foto2: string = 'public/zdjecia/t2.jpg'

nazwaanimacji3: string = 'Brightness Truskawka'
foto3: string = 'public/zdjecia/t3.jpg'

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
