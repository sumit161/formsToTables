import { Component } from '@angular/core';
import { Ipost, Iproduct, PcatType } from './shared/model/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  studentArray: Array<Ipost> = [
    {
      fname: 'jhon',
      lname: 'doe',
      contact: '123',
      email: '@jhon',
    },
  ];
  ondoller(std: Ipost) {
    this.studentArray.push(std);
    console.log(this.studentArray);
  }
  title = 'tableTaskNgModel';

  //product
  /*   ProductArray: Array<Iproduct> = [
    {
      pname: 'string',
      pDesc: 'string',
      Pcat: 'Catlog',
    },
  ];
  addProductDetails(pname: HTMLInputElement, pDesc: HTMLInputElement,probability:IType) {
    // console.log(pname, pDesc,Pcat);
    console.log(pname, pDesc,);
    let obj: Iproduct = {
      pname: pname.value,
      pDesc: pDesc.value,
      Pcat: probability,// CatlogProduct
    };
    this.ProductArray.push(obj);
    console.log(this.ProductArray)
  } */
  ProductArray: Array<Iproduct> = [
    { pname: 'samsung', pdesc: 'dm-234', Pcat: 'Product' },
  ];

  Onclick(pname: HTMLInputElement, pdesc: HTMLInputElement, view: PcatType) {
    let obj: Iproduct = {
      pname: pname.value,
      pdesc: pdesc.value,
      Pcat: view,
    };
    this.ProductArray.push(obj);
  }
}
