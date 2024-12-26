import { Component, Input } from '@angular/core';
import { DynamicComponent } from '../../dynamic-component';

@Component({
  selector: 'app-dynamic-card',
  templateUrl: './dynamic-card.component.html',
  styleUrls: ['./dynamic-card.component.css']
})
export class DynamicCardComponent implements DynamicComponent {
  @Input() data: any;
  @Input() onAction!: (action: string) => void;
}
