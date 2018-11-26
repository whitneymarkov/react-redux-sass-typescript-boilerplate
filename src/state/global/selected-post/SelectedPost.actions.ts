import { Dispatch, Store } from 'redux';
import { IPayloadAction } from '../../utils/IPayloadAction';
import { ActionCreator } from '../../utils/ActionCreatorGenerator';
import { SELECTED_POST_ACTIONS } from './SelectedPost.types';

export interface ISelectedPostActions {
    setAction(item: any): IPayloadAction<string, any>;
}

export class SelectedPostActions implements ISelectedPostActions {
    public setAction: (item: any) => IPayloadAction<string, any>;

    constructor() {
       this.setAction = new ActionCreator<string, any>(SELECTED_POST_ACTIONS.SET).createActionCreator();
    }
}
