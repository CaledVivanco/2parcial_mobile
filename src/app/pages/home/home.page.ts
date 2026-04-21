import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone:false,
  templateUrl: './home.page.html',
})
export class HomePage implements OnInit {

  cards: any[] = [];

  ngOnInit() {
    this.cards = [
      { brand: 'VISA', number: '**** **** **** 1234' },
      { brand: 'MASTERCARD', number: '**** **** **** 5678' }
    ];
  }
}