import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  msgs = [];
  constructor(
    private dataService: DataService
  ) {
    this.msgs = this.dataService.messages;
  }

  ngOnInit() {
  }

}
