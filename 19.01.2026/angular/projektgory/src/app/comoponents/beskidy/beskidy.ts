import { Component } from '@angular/core';

@Component({
  selector: 'app-normalny',
  standalone: false,
  templateUrl: './beskidy.html',
  styleUrl: './beskidy.css',
})
export class Beskidy {
opisy: Opis[];
constructor(){
  this.opisy=[
    {opisg: "Beskid", foto:"assets/g2.jpg"},
  ]
}
}

class Opis{
  opisg!: string;
  foto!:string;
}