import { State, ActionReducer } from '@ngrx/store';
import * as WorkItemActions from './../actions/work-item.actions';
import { WorkItemState, initialState } from './../states/work-item.state';
import { cloneDeep } from 'lodash';

import { WorkItem } from './../models/work-item';

export type Action = WorkItemActions.All;

export const WorkItemReducer: ActionReducer<WorkItemState> = (state = initialState, action: Action) => {
  switch(action.type) {

    case WorkItemActions.ADD_SUCCESS: {
      if (action.payload.parentID) {
        const parentIndex =
          state.findIndex(s => s.id === action.payload.parentID);
        if (parentIndex > -1) {
          state[parentIndex].hasChildren = true;
          state[parentIndex].childrenLoaded = true;
          state[parentIndex].treeStatus = 'expanded';
        }
      }
      return [action.payload, ...state];
    }

    case WorkItemActions.ADD_ERROR: {
      return state;
    }

    case WorkItemActions.GET_SUCCESS: {
      return action.payload;
    }

    case WorkItemActions.GET_ERROR: {
      return state;
    }

    case WorkItemActions.GET_CHILDREN_ERROR: {
      const parent = action.payload;
      const parentIndex =
        state.findIndex(s => s.id === action.payload.id);
      state[parentIndex].treeStatus = 'collapsed';
      return [...state];
    }

    case WorkItemActions.GET_CHILDREN_SUCCESS: {
      const parent = action.payload.parent;
      const children = action.payload.children;
      const parentIndex = state.findIndex(s => {
        return s.id === parent.id;
      });
      if (parentIndex > -1) {
        state[parentIndex].childrenLoaded = true;
        state[parentIndex].treeStatus = 'expanded';
        return [...state, ...children];
      }
      return [...state];
    }

    case WorkItemActions.UPDATE_SUCCESS: {
      const index = state.findIndex(i => i.id === action.payload.id);
      if (index > -1) {
        return [
          ...state.slice(0, index),
          action.payload,
          ...state.slice(index + 1)
        ];
      }
      return [...state];
    }

    case WorkItemActions.UPDATE_ERROR: {
      return state;
    }

    case WorkItemActions.UPDATE_WORKITEM_ITERATION: {
      state.forEach((i) => {
        if(i.iterationId === action.payload.iteration.id){
         // i.iterationId = action.payload.iteration
        }
      });
      return [...state];
    }

    case WorkItemActions.CREATE_LINK: {
      if (action.payload.sourceTreeStatus === 'expanded') {
        let index = state.findIndex(w => w.id === action.payload.target.id);
        if (index > -1) {
          state[index].parentID = action.payload.source.id;
        }
      } else if (action.payload.sourceTreeStatus === 'disabled') {
        let sourceIndex = state.findIndex(w => w.id === action.payload.source.id);
        let targetIndex = state.findIndex(w => w.id === action.payload.target.id);
        if (sourceIndex > -1 && targetIndex > -1) {
          state[sourceIndex].hasChildren = true;
          state[sourceIndex].treeStatus = 'collapsed';
          state.splice(targetIndex, 1);
        }
      }
      return [...state];
    }

    case WorkItemActions.DELETE_LINK: {
      let index = state.findIndex(w => w.id === action.payload.target.id);
      if (index > -1) {
        state[index].parentID = '';
      }
      return [...state];
    }

    default: {
      return state;
    }
  }
}
