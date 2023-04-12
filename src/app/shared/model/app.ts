export interface Ipost {
  fname: string;
  lname: string;
  contact: string;
  email: string;
}
//product
/* export interface Iproduct {
  pname: string;
  pDesc: string;
  Pcat: IType;
}

export type IType = 'Product' | 'Catlog';
 */

export interface Iproduct {
  pname: string;
  pdesc: string;
  Pcat: PcatType;
}
export type PcatType = 'Product' | 'Catlog';
