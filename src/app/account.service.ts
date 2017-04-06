import { Injectable } from '@angular/core';
import { Account } from './account.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class AccountService {
  accounts: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.accounts = angularFire.database.list('accounts');
  }

  getAccounts(){
    return this.accounts;
  }

  addAccount(newAccount: Account) {
    this.accounts.push(newAccount);
  }

  getAccountById(accountId: number){
    // for (var i = 0; i <= ACCOUNTS.length - 1; i++) {
    //   if (ACCOUNTS[i].id === accountId) {
    //     return ACCOUNTS[i];
    //   }
    // }
  }

}
