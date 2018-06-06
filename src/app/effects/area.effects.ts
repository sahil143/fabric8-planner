import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as AreaActions from './../actions/area.actions';
import { Observable } from 'rxjs';
import { AppState } from './../states/app.state';
import { Notification, Notifications, NotificationType } from "ngx-base";

import { AreaService as AService } from './../services/area.service';
import {
  AreaService,
  AreaMapper
} from './../models/area.model';
import { normalizeArray } from '../models/common.model';

export type Action = AreaActions.All;

@Injectable()
export class AreaEffects {
  constructor(
    private actions$: Actions,
    private areaService: AService,
    private store: Store<AppState>,
    private notifications: Notifications
  ){}

  @Effect() getAreas$: Observable<Action> = this.actions$
    .ofType(AreaActions.GET)
    .withLatestFrom(this.store.select('listPage').select('space'))
    .switchMap(([action, space]) => {
      return this.areaService.getAreas2(
          space.relationships.areas.links.related
        )
        .map((areas: AreaService[]) => {
          const aMapper = new AreaMapper();
          return areas.map(a => aMapper.toUIModel(a));
        })
        .map(areas => new AreaActions.GetSuccess(normalizeArray(areas)))
        .catch((e) => {
          try {
            this.notifications.message({
              message: `Problem in fetching Areas.`,
              type: NotificationType.DANGER
            } as Notification);
          } catch (e) {
            console.log('Problem in fetching Areas.');
          }
          return Observable.of(
            new AreaActions.GetError()
          );
        });
    });
}
