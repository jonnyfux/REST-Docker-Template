import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'restdockertemplate-frontend';
  public backenData;
  private apiAdress = environment.apiUrl || 'http://localhost:3000/';


  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get(this.apiAdress).toPromise().then(result => {
    this.backenData = JSON.stringify(result);
    });
  }
}
