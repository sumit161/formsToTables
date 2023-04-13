import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ipost } from 'src/app/shared/model/app';

@Component({
  selector: 'app-ng-child-to-parent',
  templateUrl: './ng-child-to-parent.component.html',
  styleUrls: ['./ng-child-to-parent.component.scss'],
})
export class NgChildToParentComponent implements OnInit {
  @Output() childtoparent: EventEmitter<Ipost> = new EventEmitter<Ipost>();
  fnameval!: string;
  lnameval!: string;
  contactval!: string;
  emailval!: string;
  number!: number ;
  onadd() {
    this.number=2;
    // console.log(this.fnameval);
    let obj: Ipost = {
      fname: this.fnameval,
      lname: this.lnameval,
      contact: this.contactval,
      email: this.emailval,
    };
    console.log(obj);
    this.childtoparent.emit(obj);
    this.fnameval="";
    this.lnameval ="";
    this.contactval="";
    this.emailval="";
  }

  constructor() {}

  ngOnInit(): void {}
}
