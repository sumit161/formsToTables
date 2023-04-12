import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ipost } from 'src/app/shared/model/app';

@Component({
  selector: 'app-view-child-form-to-parent',
  templateUrl: './view-child-form-to-parent.component.html',
  styleUrls: ['./view-child-form-to-parent.component.scss']
})
export class ViewChildFormToParentComponent implements OnInit {
  @Output() childtoparent: EventEmitter<Ipost> = new EventEmitter<Ipost>();
  @ViewChild('fnamevalue') PropertyNameFname!: ElementRef;
  @ViewChild('lnamevalue') PropertyNamelname!: ElementRef;
  @ViewChild('contactvalue') PropertyNamecontact!: ElementRef;
  @ViewChild('emailvalue') PropertyNamenemail!: ElementRef;

  onadd() {
    // console.log(this.PropertyNameFname.nativeElement.value);
    let obj: Ipost = {
      fname: this.PropertyNameFname.nativeElement.value,
      lname: this.PropertyNamelname.nativeElement.value,
      contact: this.PropertyNamecontact.nativeElement.value,
      email: this.PropertyNamenemail.nativeElement.value,
    };
    // console.log(obj);
    this.childtoparent.emit(obj);
    this.PropertyNameFname.nativeElement.value = '';
    this.PropertyNamelname.nativeElement.value = '';
    this.PropertyNamecontact.nativeElement.value = '';
    this.PropertyNamenemail.nativeElement.value = '';
  }
  constructor() {}

  ngOnInit(): void {}
}
