import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public accountid:any=0;
  public accoutName:String;
  constructor() { }
  setAccountId(accountid:any){
    this.accountid=accountid;
  }
  getAccountId(){
    return this.accountid;
  }

  getAccoutName(accountid:any){
    if(accountid === 0)
    return "LOGIN";
    else
    return 'Gopi';
  }

}
