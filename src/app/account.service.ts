import { Injectable } from '@angular/core';
import { Account } from './account.model';
import { ACCOUNTS } from './mock-accounts';

@Injectable()
export class AccountService {

  constructor() { }

  getAccounts() {
    return ACCOUNTS;
  }

  getAccountById(accountId: number){
    for (var i = 0; i <= ACCOUNTS.length - 1; i++) {
      if (ACCOUNTS[i].id === accountId) {
        return ACCOUNTS[i];
      }
    }
  }

}
