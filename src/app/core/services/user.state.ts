// users.state.ts

import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UserService } from '../services/user.service';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export class FetchUsers {
  static readonly type = '[Users] Fetch Users';
}

export interface UsersStateModel {
  users: any[];
}

@State<UsersStateModel>({
  name: 'users',
  defaults: {
    users: []
  }
})
@Injectable({
    providedIn: 'root'
  })
export class UsersState {

  constructor(private userService: UserService) {}

  @Selector()
  static getUsers(state: UsersStateModel) {
    return state.users;
  }

  @Action(FetchUsers)
  fetchUsers({ getState, setState }: StateContext<UsersStateModel>) {
    debugger
    return this.userService.getUsers().pipe(
      tap(users => {
        const state = getState();
        setState({
          ...state,
          users
        });
      })
    );
  }
}
