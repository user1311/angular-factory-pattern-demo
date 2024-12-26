import { Component, Input } from '@angular/core';
import { DynamicComponent } from '../../dynamic-component';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements DynamicComponent {
  @Input() data: any = { title: 'Test Table', content: 'This is test content.' };
  @Input() onAction!: (action: string) => void;

}
