import { Component } from '@angular/core';
import { Ipost, Iproduct, PcatType } from './shared/model/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  studentArray1: Array<Ipost> = [
    {
      fname: 'jhon',
      lname: 'doe',
      contact: '123',
      email: '@jhon',
    },
  ];
  studentArray2: Array<Ipost> = [
    {
      fname: 'lucy',
      lname: 'ronaldo',
      contact: '4123',
      email: '@lucy',
    },
  ];
  studentArray3: Array<Ipost> = [
    {
      fname: 'july',
      lname: 'doe',
      contact: '1423',
      email: '@dany',
    },
  ];
  ondoller1(std: Ipost) {
    this.studentArray1.push(std);
    console.log(this.studentArray1);
  }
  ondoller2(std: Ipost) {
    this.studentArray2.push(std);
    console.log(this.studentArray2);
  }
  ondoller3(std: Ipost) {
    this.studentArray3.push(std);
    console.log(this.studentArray3);
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
