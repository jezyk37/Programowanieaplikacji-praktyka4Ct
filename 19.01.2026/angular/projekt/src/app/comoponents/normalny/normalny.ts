import { Component } from '@angular/core';

@Component({
  selector: 'app-normalny',
  standalone: false,
  templateUrl: './normalny.html',
  styleUrl: './normalny.css',
})
export class Normalny {
opisy: Opis[];
constructor(){
  this.opisy=[
    {imie: "Jan", nazwisko: "Kowalski", wiek: 20, przedmiot: "Matematyka", foto:'assets/n1.jpg'},
    {imie: "Monika", nazwisko: "Kakashka", wiek: 30, przedmiot: "Fizyka", foto:'assets/n2.jpg'},
    {imie: "Ximih", nazwisko: "Uia", wiek: 41, przedmiot: "Polski", foto:'assets/n3.jpg'}
  ]
}
}

class Opis{
  imie!: string;
  nazwisko!: string;
  wiek!: number;
  przedmiot!: string;
  foto!:string;
}