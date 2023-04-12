import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from 'src/app/shared/model/app';

@Component({
  selector: 'app-view-parent-to-table',
  templateUrl: './view-parent-to-table.component.html',
  styleUrls: ['./view-parent-to-table.component.scss']
})
export class ViewParentToTableComponent implements OnInit {
  studentArray!: Array<Ipost>;
  @Input() stdInfo!:Array<Ipost>
  // newStdinfo!: Ipost;
    constructor() { }

    ngOnInit(): void {
      console.log(this.stdInfo)
    }

  }

