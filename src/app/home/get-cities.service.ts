import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GetCitiesService {
  public headers = { 'content-type': 'application/json'} 
  addCityform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  // cityData={
  //   name:"ahmedabads",
  //   description:"Good1"
  // }
  // body=JSON.stringify(this.cityData);
  constructor(private _http: HttpClient) {
    
  }
  getData(){
    return this._http.get('https://localhost:7029/api/v1/cities');
  }
  createCiti(name:string,description:string){
    return this._http.post('https://localhost:7029/api/v1/cities',{name,description},{'headers':this.headers});
  }
}
