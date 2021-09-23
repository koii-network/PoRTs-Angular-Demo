import { Injectable } from '@angular/core';
import * as portSDK from '@_koi/port';
// const koi = new tools.Web();
// import {PoRT} from "@_koi/port";
// let port = new PoRT({
//   trustedNodeAddress:"REACT_APP_NODE_URL",
//   node: 1,
//   walletLocation:"yy"
// });



@Injectable({
  providedIn: 'root'
})
export class PortService {
  port:any
  constructor() { 
   this.port = new portSDK.PoRT({
      trustedNodeAddress: "https://mainnet.koii.live",
      node:5,
      walletLocation:""
    });
  }
}
