import { Component,OnInit } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { DataService } from '../../../mock-api/data.service';
import { response } from 'express';
import { error } from 'console';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  dataWheather :any;
  city : string = 'bangkok';
 

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getWeather(this.city);
  }

  getWeather(city: string) {
    this.dataService.getCurrentWeather(city).subscribe((response) => {
      this.dataWheather = response;
      console.log(this.dataWheather);
      console.log("c: " + this.dataWheather.location.country);
      
    }, error => {
      console.log(error);
    });
  }


 
}
