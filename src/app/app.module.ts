import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ELearningPanelComponent } from './components/e-learning-panel/e-learning-panel.component';

//PrimeNG
import { MenubarModule } from 'primeng/menubar';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    ELearningPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MenubarModule, ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
