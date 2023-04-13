import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ipost } from 'src/app/shared/model/app';

@Component({
  selector: 'app-ref-form-to-parent',
  templateUrl: './ref-form-to-parent.component.html',
  styleUrls: ['./ref-form-to-parent.component.scss']
})
export class RefFormToParentComponent implements OnInit {
  @Output() createEvent: EventEmitter<Ipost> = new EventEmitter<Ipost>();
  fnameval!: string;
  lnameval!: string;
  contactval!: string;
  emailval!: string;
  onadd1(fname: HTMLInputElement, lname: HTMLInputElement, contact: HTMLInputElement, email: HTMLInputElement) {
    console.log(fname, lname, contact, email);
    let obj: Ipost = {
      fname: fname.value,
      lname: lname.value,
      contact: contact.value,
      email: email.value,
    };
    console.log(obj);
    this.createEvent.emit(obj);
    fname.value = '';
    lname.value = '';
    contact.value = '';
    email.value = '';
  }
  constructor() {}

  ngOnInit(): void {}
}
