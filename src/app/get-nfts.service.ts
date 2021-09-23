import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class GetNftsService {

  constructor(private http:HttpClient) { }
  getData(){
    let url:string="https://mainnet.koii.live/attention/nft-summaries?period=1d";
    return this.http.get(url)
  }

  }

