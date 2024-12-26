import { AfterContentInit, AfterRenderRef, AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StaticData } from 'src/app/helpers/components/page-configurations';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent {
  list_items: any = [];
  @Output() componentSelected = new EventEmitter<string>();
  
  constructor() {
    this.list_items = StaticData.modules[0].tasks;
  }

  selectComponent(componentType: string) {
    this.componentSelected.emit(componentType);
  }
}
