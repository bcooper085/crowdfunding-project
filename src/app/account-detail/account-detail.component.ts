import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Account } from '../account.model';
import { AccountService } from '../account.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css'],
  providers: [AccountService]
})
export class AccountDetailComponent implements OnInit {
  accountId: string;
  accountToDisplay;

  constructor(
      private route: ActivatedRoute,
      private location: Location,
      private accountService: AccountService
    ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.accountId = urlParameters['id'];
    });
    this.accountToDisplay = this.accountService.getAccountById(this.accountId);
  }
}
