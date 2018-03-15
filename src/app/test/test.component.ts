import { Component, OnInit } from '@angular/core';
import { AlertService } from '../shared/modules/alert/services/alert.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private alertSerive: AlertService) { }

  ngOnInit() {
  }

  trigerAlert(){


  	//your code goes here
  	//It may http request
  	//or any other

  	//So you can use this alert service any where in your application


  	this.alertSerive.create(
  		"Title", //title
  		"danger", //type
  		5000, // time
  		"success Alter" //body

  		);
  }

}
