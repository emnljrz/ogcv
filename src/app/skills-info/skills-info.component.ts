import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-skills-info',
	templateUrl: './skills-info.component.html',
	styleUrls: ['./skills-info.component.scss']
})
export class SkillsInfoComponent implements OnInit {

	@Input() data: any;

	constructor() { }
	ngOnInit(): void { }

}
