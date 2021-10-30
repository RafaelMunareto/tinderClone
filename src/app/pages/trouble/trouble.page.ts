import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trouble',
  templateUrl: './trouble.page.html',
  styleUrls: ['./trouble.page.scss'],
})
export class TroublePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  email() {
    this.router.navigate(['login-with-email']);
  }
}
