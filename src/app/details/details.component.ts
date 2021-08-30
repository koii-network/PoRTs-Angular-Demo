import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  id: string;
  nft: any;
  constructor(private roue: ActivatedRoute) {
    this.id = this.roue.snapshot.paramMap.get('id') as string;
    fetch(`https://bundler.openkoi.com:8888/state/nft?tranxId=${this.id}`)
      .then((res) => res.json())
      .then((res) => (this.nft = res));
  }

  ngOnInit(): void {}
}
