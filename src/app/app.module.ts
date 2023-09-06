import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ELearningPanelComponent } from './components/e-learning-panel/e-learning-panel.component';
import { FormsModule } from '@angular/forms';
//PrimeNG
import { MenubarModule } from 'primeng/menubar';
import { ChartModule } from 'primeng/chart';
import { ELearningPanelMincitComponent } from './components/e-learning-panel-mincit/e-learning-panel-mincit.component';

@NgModule({
  declarations: [
    AppComponent,
    ELearningPanelComponent,
    ELearningPanelMincitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MenubarModule, ChartModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
