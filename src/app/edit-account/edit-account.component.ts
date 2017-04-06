import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css'],
  providers: [AccountService]
})
export class EditAccountComponent implements OnInit {
  @Input() selectedAccount;

  constructor(private accountService: AccountService) { }

  ngOnInit() {

  }

  beginUpdatingAccount(accountToUpdate) {
    this.accountService.updateAccount(accountToUpdate);
  }

  beginDeletingAccount(accountToDelete) {
    if(confirm("Are you sure you want to delete this account?")) {
      this.accountService.deleteAccount(accountToDelete);
    }
  }


}
