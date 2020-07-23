import { InfoService } from './../info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  public infos = [];
  constructor(private _infoService:InfoService) { }

  ngOnInit() {
    this._infoService.getInfos()
    .subscribe(data => this.infos = data);
  }

}
