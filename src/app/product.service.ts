import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Album} from './album';
import {Product} from './product';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  private _productsUrl = '../assets/products.json';

  constructor(private _http: Http) {
  }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl)
      .map(response => {
      return <Album>response.json();
    });
  }

  getProducts(): Observable<Product[]> {
    console.log('getProducts');

    return this._http.get(this._productsUrl)
      .map(response => {
        console.log('response' + response);
        return <Product[]>response.json();
      }, error => {
        console.log('error' + error)
      });
  }
}
