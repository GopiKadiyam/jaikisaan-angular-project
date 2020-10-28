import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginformcloseBtn') loginformcloseBtn: ElementRef;

  isSignUpActive:Boolean;
  isSignInActive:Boolean;
  accountName:String;
  signinForm: FormGroup;
  signupForm: FormGroup;
  selectedLogin: String;
  signinMessage: String = "";

  public profileNavbarOptions = ["SignIn/SignUp", "profile", "logout"];
  constructor(public fb: FormBuilder, private router: Router, private loginService: LoginService) {
    this.signinForm = fb.group({
      username: [null, [Validators.required]],
      password: [null, Validators.required],
    });
    this.signupForm = fb.group({
      accountType: [null, [Validators.required]],
      username: [null, [Validators.required]],
      password: [null, Validators.required],
    });
  }

  ngOnInit() {

  }

  get accountid() { return this.loginService.getAccountId(); }
  get userName() { return this.loginService.getAccoutName(this.accountid); }
  get signUpAccountType() { return this.signupForm.get('accountType'); }
  get signUpUsername() { return this.signupForm.get('username'); }
  get signUpPassword() { return this.signupForm.get('password'); }

  get signInUsername() { return this.signinForm.get('username'); }
  get signInPassword() { return this.signinForm.get('password'); }

  loginSubmit() {
    console.log(this.signinForm);
    this.loginService.setAccountId(this.signinForm.get('username')?.value);
    this.router.navigate(['home']);
    this.loginformcloseBtn.nativeElement.click();
  }
  signUp() {
    console.log(this.signupForm);
    this.loginformcloseBtn.nativeElement.click();
  }
  logout() {
    this.loginService.setAccountId(0);
  }

  onclickSigninORup(selectedLoginType: String) {
    this.selectedLogin = selectedLoginType;
    if(selectedLoginType === "signin"){
    this.isSignUpActive=false;
    this.isSignInActive=true;
  }
    else if(selectedLoginType === "signup"){
      this.isSignInActive=false;
    this.isSignUpActive=true;
  }
  }


}
