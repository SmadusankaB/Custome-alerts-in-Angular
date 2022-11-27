import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { AlertService } from './services/alert.service';
import { Alert } from './interfaces/alert';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss'],
	animations: [
		trigger('dialog', [
			transition('void => *', [
				style({ transform: 'scale3d(.3, .3, .3)' }),
				animate(100)
			]),
			transition('void => *',
				animate(100, style({ transform: 'scale3d(.3, .3, .3)' })))
		])
	]
})
export class AlertComponent implements OnInit {

	//hide and show alert
	modalStatus!: boolean;

	//custom settings
	title!: string;
	type!: string;
	time!: number;
	body!: string;

	//default settings
	backColor!: string;

	@Output() alertResEvent = new EventEmitter<boolean>();

	constructor(
		private alertService: AlertService,
	) { }

	ngOnInit() {
		this.alertService.alertSettings$.subscribe(
			(data: Alert) => {
				this.title = data.title;
				this.type = data.type;
				this.time = data.time;
				this.body = data.body

				if (this.type == "danger") {
					this.backColor = "#dc3545";
				}
				if (this.type == "info") {
					this.backColor = "#a1930f";
				}
				if (this.type == "success") {
					this.backColor = "#28a745";
				}
				//show alert
				this.modalStatus = true;
			}
		);
	}

	//close alert after click on ok and cross
	resolve(res: boolean) {
		this.modalStatus = false;
		this.alertResEvent.emit(res);
	}
}
