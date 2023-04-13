import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from 'src/app/shared/model/app';

@Component({
  selector: 'app-ref-parent-to-table',
  templateUrl: './ref-parent-to-table.component.html',
  styleUrls: ['./ref-parent-to-table.component.scss']
})
export class RefParentToTableComponent implements OnInit {
  studentArray!: Array<Ipost>;
  @Input() stdInfo1!:Array<Ipost>
  // newStdinfo!: Ipost;
    constructor() { }

    ngOnInit(): void {
      console.log(this.stdInfo1)
    }

  }
