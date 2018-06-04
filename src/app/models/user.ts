import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store, createSelector, createFeatureSelector } from '@ngrx/store';
import { User, Profile, UserService as UserServiceClass } from 'ngx-login-client';
import { isEmpty } from 'lodash';
import { AppState, ListPage } from './../states/app.state';
import {
  modelUI,
  modelService,
  Mapper,
  MapTree,
  switchModel
} from './common.model';
import { Get as GetUserAction } from './../actions/user.actions';



export interface UserService extends modelService {
  attributes?: Profile;
  links?: {
    self?: string;
    related?: string;
  }
}

export interface UserUI extends modelUI {
  avatar: string;
  username: string;
  currentUser: boolean;
}

@Injectable()
export class UserMapper implements Mapper<UserService, UserUI> {

  serviceToUiMapTree: MapTree = [{
    fromPath: ['id'],
    toPath: ['id']
  }, {
    fromPath: ['attributes', 'fullName'],
    toPath: ['name']
  }, {
    fromPath: ['attributes', 'imageURL'],
    toPath: ['avatar']
  }, {
    fromPath: ['attributes', 'username'],
    toPath: ['username']
  }, {
    toPath: ['currentUser'],
    toValue: false
  }];

  uiToServiceMapTree: MapTree = [{
    toPath: ['id'],
    fromPath: ['id']
  }, {
    toPath: ['attributes', 'fullName'],
    fromPath: ['name']
  }, {
    toPath: ['attributes', 'imageURL'],
    fromPath: ['avatar']
  }, {
    toPath: ['attributes', 'username'],
    fromPath: ['username']
  }, {
    toPath: ['type'],
    toValue: 'identities'
  }];

  toUIModel(arg: UserService): UserUI {
    return switchModel<UserService, UserUI> (
      arg, this.serviceToUiMapTree
    )
  }

  toServiceModel(arg: UserUI): UserService {
    return switchModel<UserUI, UserService> (
      arg, this.uiToServiceMapTree
    )
  }
}

@Injectable()
export class UserQuery {
  constructor(
    private store: Store<AppState>,
    private userService: UserServiceClass
  ) {}

  private listPageSelector = createFeatureSelector<ListPage>('listPage');
  private userSelector = createSelector(
    this.listPageSelector,
    (state) => state.users
  );
  private userSource = this.store.select(this.userSelector);

  private collaboratorIdsSelector = createSelector(
    this.listPageSelector,
    (state) => state.collaborators
  );

  private collaboratorSelector = createSelector(
    this.userSelector,
    this.collaboratorIdsSelector,
    (users, collabs) => isEmpty(users) ? [] : collabs.map(c => users[c])
  );

  private collaboratorSource = this.store.select(this.collaboratorSelector);

  getUserObservableById(id: string): Observable<UserUI> {
    return this.userSource.select(users => users[id])
      // If the desired user doesn't exist then fetch it
      .do(user => {
        if(!user) {
          this.store.dispatch(new GetUserAction(id))
        }
      })
      // filter the pipe based on availability of the user
      .filter(user => !!user);
  }

  getUserObservablesByIds(ids: string[] = []): Observable<UserUI[]> {
    if (!ids.length) return Observable.of([]);
    return Observable.combineLatest(ids.map(id => this.getUserObservableById(id)));
  }

  getCollaborators(): Observable<UserUI[]> {
    return this.collaboratorSource
      .filter(c => !!c.length)
      .switchMap(collaborators => {
        return this.userService.loggedInUser
          .map(u => {
            return collaborators.map(c => {
              return {...c, currentUser: u ? c.id === u.id : false};
            });
          });
      })
  }
}
