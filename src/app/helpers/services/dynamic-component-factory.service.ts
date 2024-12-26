import { Injectable, Type, ViewContainerRef } from '@angular/core';
import { DynamicCardComponent } from '../components/dynamic-card/dynamic-card.component';
import { DynamicTableComponent } from '../components/dynamic-table/dynamic-table.component';
import { CustomComponent } from 'src/app/components/custom/custom.component';
import { StaticData } from '../components/page-configurations';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentFactoryService {
  private componentMap: { [key: string]: Type<any> } = {
    card: DynamicCardComponent,
    table: DynamicTableComponent,
    customComponent: CustomComponent,
    newreceipts: CustomComponent,
    receivedreceipts: CustomComponent,
    approvedreceipts: CustomComponent
  };

  createComponent(type: string, container: ViewContainerRef, data: any, onAction: (action: string) => void) {
    const componentType = this.componentMap[type];
    if (!componentType) {
      throw new Error(`Component type "${type}" is not supported.`);
    }

    container.clear(); // Clear previous components if necessary
    const componentRef = container.createComponent(componentType); // Updated method
    const instance = componentRef.instance;

    instance.data = StaticData.modules[0].tasks.find(task => task.id == type);
    instance.onAction = onAction;

    return componentRef;
  }
}
