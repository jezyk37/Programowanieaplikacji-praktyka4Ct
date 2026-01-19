import { Component } from '@angular/core';

@Component({
  selector: 'app-tatry',
  standalone: false,
  templateUrl: './tatry.html',
  styleUrl: './tatry.css',
})
export class Tatry {
opisy: Opis[];
constructor(){
  this.opisy=[
    {opisg: "Tatry", foto:"assets/g1.jpg"},
  ]
}
}

class Opis{
  opisg!: string;
  foto!:string;
}
