import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetCitiesService } from './get-cities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private getCities: string = "https://localhost:7029/api/v1/cities";

  newData: any;

  //City inputs
  public name?:string;
  public description?:string;
  //---close
  constructor(private _getServices: GetCitiesService) {

  }
  ngOnInit(): void {
    this._getServices.getData().subscribe(res => {
      this.newData = res;
    })
  }

  setName(e:any):void{
      //console.log(e.target.value);
      this.name=e.target.value;
      
  }

  setDescription(e:any):void{
    this.description=e.target.value
  }
  createCity():void{
    console.log("Create City");
    var data=this._getServices.createCiti(this.name||'',this.description||'');
    console.log(data.subscribe());
    this._getServices.getData().subscribe(res => {
      this.newData = res;
    })
    
  }
  





}
