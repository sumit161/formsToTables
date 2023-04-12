import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from 'src/app/shared/model/app';

@Component({
  selector: 'app-parent-to-table',
  templateUrl: './parent-to-table.component.html',
  styleUrls: ['./parent-to-table.component.scss']
})
export class ParentToTableComponent implements OnInit {
  studentArray!: Array<Ipost>;
  @Input() stdInfo!:Array<Ipost>
  // newStdinfo!: Ipost;
    constructor() { }

    ngOnInit(): void {
      console.log(this.stdInfo)
    }

  }
