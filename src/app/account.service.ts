import { Injectable } from '@angular/core';
import { Account } from './account.model';
import { ACCOUNTS } from './mock-accounts';
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

  getAccountById(accountId: number){
    for (var i = 0; i <= ACCOUNTS.length - 1; i++) {
      if (ACCOUNTS[i].id === accountId) {
        return ACCOUNTS[i];
      }
    }
  }

}
