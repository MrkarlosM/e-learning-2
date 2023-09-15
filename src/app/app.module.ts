import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ELearningPanelComponent } from './components/e-learning-panel/e-learning-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//PrimeNG
import { MenubarModule } from 'primeng/menubar';
import { ChartModule } from 'primeng/chart';
import { ELearningPanelMincitComponent } from './components/e-learning-panel-mincit/e-learning-panel-mincit.component';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [
    AppComponent,
    ELearningPanelComponent,
    ELearningPanelMincitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MenubarModule, ChartModule, HttpClientModule, FormsModule, ReactiveFormsModule, MultiSelectModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
