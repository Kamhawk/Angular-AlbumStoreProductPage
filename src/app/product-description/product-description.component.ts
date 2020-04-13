import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo: any;

  constructor(private _prodService: ProductService) { }

  ngOnInit() {
    this._prodService.getAlbum(1).subscribe(
      res => this.albumInfo = res
    )
  }

}
