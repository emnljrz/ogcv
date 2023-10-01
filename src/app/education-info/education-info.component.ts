import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-education-info',
	templateUrl: './education-info.component.html',
	styleUrls: ['./education-info.component.scss']
})
export class EducationInfoComponent implements OnInit {
	
	@Input() data: any;

	constructor() { }
	ngOnInit(): void { }

}
