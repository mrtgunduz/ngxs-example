import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FetchUsers, UsersState, UsersStateModel } from './core/services/user.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Select(UsersState.getUsers) users$?: Observable<any[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    
    this.store.dispatch(new FetchUsers());
  this.users$?.subscribe(users => console.log(users));
  }

  testo(){

  }
}
