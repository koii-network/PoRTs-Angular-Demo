import { Component } from '@angular/core';
import { GetNftsService } from './get-nfts.service';
// import {PoRT} from "@_koi/port"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ports-angular-demo';
  tmp: any = [];
  nftList: any = [];
  nftContent: any = [];

  constructor(private nfts: GetNftsService) {

    this.nfts.getData().subscribe((data) => {
      this.tmp = data;
      for (let i = 0; i < 20; i++) {
        let e = this.tmp[i];
        fetch(`https://mainnet.koii.live/attention/nft?id=${e["id"]}`)
          .then((res) => res.json())
          .then((res) => this.nftContent.push(res));
      }
    });
  }
}
