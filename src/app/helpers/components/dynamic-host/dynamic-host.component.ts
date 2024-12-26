import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentFactoryService } from '../../services/dynamic-component-factory.service';
@Component({
  selector: 'app-dynamic-host',
  templateUrl: './dynamic-host.component.html',
  styleUrls: ['./dynamic-host.component.css']
})
export class DynamicHostComponent {
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private factory: DynamicComponentFactoryService) {}

  loadComponent(type: string) {
    const data = { title: `${type} Component`, content: `This is a dynamic ${type}.` };
    this.factory.createComponent(type, this.container, data, (action) => this.handleAction(action));
  }

  handleAction(action: string) {
    console.log('Action received from child:', action);
  }
}
