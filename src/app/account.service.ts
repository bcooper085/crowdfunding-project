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

  getAccountById(accountId: string){
    return this.angularFire.database.object('accounts/' + accountId);
  }

  updateAccount(localUpdatedAccount){
    var accountEntryInFirebase = this.getAccountById(localUpdatedAccount.$key);
    accountEntryInFirebase.update({name: localUpdatedAccount.name,
                                description: localUpdatedAccount.description,
                                goal: localUpdatedAccount.goal});
  }

  deleteAccount(localAccountToDelete) {
    var accountEntryInFirebase = this.getAccountById(localAccountToDelete.$key);
    accountEntryInFirebase.remove();
  }

}
