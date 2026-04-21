import { Component, Input } from '@angular/core';
import { IonCard } from "@ionic/angular/standalone";

@Component({
  selector: 'app-card-item',
  standalone:false,
  templateUrl: './card-item.component.html',
})
export class CardItemComponent {

  @Input() card: any;

}