import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-info',
  templateUrl: './work-info.component.html',
  styleUrls: ['./work-info.component.scss']
})
export class WorkInfoComponent implements OnInit {

  @Input() data: any;

  constructor() { }
  ngOnInit(): void { }

}
