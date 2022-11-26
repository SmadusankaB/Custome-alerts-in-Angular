import { Component, OnInit } from '@angular/core';
import { AlertService } from '../shared/modules/alert/services/alert.service';
@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

	constructor(private alertService: AlertService) { }

	ngOnInit() {}

	successAlert(): void {
		this.alertService.create(
			"Success", //title
			"success", //type: success, danger, info
			5000, // time
			"You connection is slower than usual" //body
		);
	}

	warningAlert(): void {
		this.alertService.create(
			"Warning", //title
			"info", //type: success, danger, info
			5000, // time
			"You connection is slower than usual" //body
		);
	}

	failedAlert(): void {
		this.alertService.create(
			"Failed", //title
			"danger", //type: success, danger, info
			5000, // time
			"You connection is slower than usual" //body
		);
	}
}
