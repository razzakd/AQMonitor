﻿import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AuthenService } from './../Auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [
        `.angular-logo {
        margin: 0 4px 3px 0;
        height: 35px;
        vertical-align: middle;
    }
    .fill-remaining-space {
      flex: 1 1 auto;
    }
    `
    ],
  providers: [AuthenService]
})
export class HeaderComponent implements OnInit {

    isLoggedIn$: Observable<boolean>;                  // {1}

  constructor(private authService: AuthenService) { }

  ngOnInit() {
      this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
  }

  onLogout() {
      this.authService.logout();                      // {3}
  }
}
