import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DivipolaServiceService {

  endpoint: string = "https://www.datos.gov.co/resource/gdxc-w37w.json?$$app_token=txz72TxChQUjVLTLp2yvKHkMy"
  limit: number=5000;
  constructor( public http : HttpClient) { } 

  getAllMunicipios(): Observable<any>{
    return this.http.get(this.endpoint+`&$limit=${5000}`);
  }
}
