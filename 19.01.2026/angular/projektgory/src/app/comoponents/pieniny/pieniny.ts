import { Component } from '@angular/core';

@Component({
  selector: 'app-pieniny',
  standalone: false,
  templateUrl: './pieniny.html',
  styleUrl: './pieniny.css',
})
export class Pieniny {

opisy: Opis[];
constructor(){
  this.opisy=[
    {opisg: "Pieniny", foto:"assets/g3.jpg"},
  ]
}
}

class Opis{
  opisg!: string;
  foto!:string;
}
