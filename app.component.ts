import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private products:any  = [];
  private _apiUrl: string = 'http://localhost:8080/api/per';
  constructor(private httpClient: HttpClient) {
    console.log("AppComponent: constructor");
    this.getProducts();
  }

  getProducts() {
    /* this.products = [
      {id: 1, name:'Superman'},
      {id: 2, name:'Batman'},
      {id: 5, name:'BatGirl'},
      {id: 3, name:'Robin'},
      {id: 4, name:'Flash'}
  ]; */
    this.httpClient.get(this._apiUrl).subscribe((res) => {
      console.log(res);
      this.products = res;
    });
  }

}
