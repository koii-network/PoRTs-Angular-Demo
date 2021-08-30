import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class GetNftsService {

  constructor(private http:HttpClient) { }
  getData(){
    let url:string="https://bundler.openkoi.com:8888/state/top-content-predicted?frequency=1w";
    return this.http.get(url)
  }

  }

