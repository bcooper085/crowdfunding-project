import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Account } from '../account.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [AccountService]
})
export class WelcomeComponent implements OnInit {
  accounts: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private accountService: AccountService) {}

  ngOnInit(){
    this.accounts = this.accountService.getAccounts();
  }

  goToDetailPage(clickedAccount) {
     this.router.navigate(['accounts', clickedAccount.$key]);
   };


}
