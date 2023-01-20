export class AccountType{
    id:Number;
    name:string;


    constructor(accountType?)
  {
      accountType = accountType || {};
      this.id = accountType.id ;
      this.name = accountType.name;
  }
}