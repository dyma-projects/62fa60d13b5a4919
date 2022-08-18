import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  constructor() { }
  public nom = 'Eliott' ;
  public agenda = 'date';


  ngOnInit(): void {
  }

  public randomnumber() {
    return Math.floor(Math.random() * 100);
  }
}
