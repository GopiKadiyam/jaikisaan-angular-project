import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginService } from 'src/app/login.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav', {static: true}) sidenav: ElementRef;

  clicked: boolean;

  constructor(private loginService:LoginService) {
    this.clicked = this.clicked === undefined ? false : true;
  }

  ngOnInit() {
  }
  get accountid() { return this.loginService.getAccountId(); }
  setClicked(val: boolean): void {
    this.clicked = val;
  }

}
