import { MenuItem } from 'primeng/api';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-learning';

  items: MenuItem[] = []

  value: any[] = [];
  asigna(entrada: any[]){
    console.log("TENEMOS PSTS y son: ", entrada)
    this.value = entrada;
    let show: any[] = [];
    entrada.forEach(element => {
      show.push(element.name.split("-")[0])      
    });
    this.value=show;
  } 
}
