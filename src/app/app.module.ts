import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicCardComponent } from './helpers/components/dynamic-card/dynamic-card.component';
import { DynamicTableComponent } from './helpers/components/dynamic-table/dynamic-table.component';
import { DynamicHostComponent } from './helpers/components/dynamic-host/dynamic-host.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { CustomComponent } from './components/custom/custom.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DynamicCardComponent,
    DynamicTableComponent,
    DynamicHostComponent,
    SideNavigationComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
