import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import portSDK from "../port"

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  id: string;
  nft: any;
  port = portSDK;
  sendPort(){
    this.port.connectWallet({})
    this.port.propagatePoRT(this.nft.id);
  }
  constructor(private roue: ActivatedRoute) {
    this.id = this.roue.snapshot.paramMap.get('id') as string;
    this.port.propagatePoRT('hrlolo'as any);
    fetch(`https://mainnet.koii.live/attention/nft?id=${this["id"]}`)
      .then((res) => res.json())
      .then((res) => (this.nft = res));
  }

  ngOnInit(): void {
     this.roue.paramMap.subscribe(params=>{
      this.id = params.get("id") as string

    })
  }
}
