import { Component, OnInit } from '@angular/core';
import { GetNftsService } from '../get-nfts.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
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
