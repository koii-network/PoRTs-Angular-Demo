import { Component } from '@angular/core';
import { GetNftsService } from './get-nfts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ports-angular-demo';
  tmp: any=[];
  nftList:any = []
  nftContent:any = []


  constructor(private nfts:GetNftsService){
    this.nfts.getData().subscribe(data=>{
      this.tmp = data;
      for (let i =0;i<20;i++){
        let e = this.tmp[i]
        let key = Object.keys(e)[0]
        this.nftList.push(this.tmp[i][key])
        fetch(`https://bundler.openkoi.com:8888/state/nft?tranxId=${key}`).then(res=>res.json()).then (res=>this.nftContent.push(res))
      }
    })

  }
}
