import { Dispatch, Store, Action } from 'redux';
import { SHOW_FILTERS_ACTIONS } from './ShowFilters.types';
import { IPayloadAction } from '../../utils/IPayloadAction';
import { ActionCreator } from '../../utils/ActionCreatorGenerator';

export interface IShowFiltersActions {
    setAction(item: any): IPayloadAction<string, any>;
}

export class ShowFiltersActions implements IShowFiltersActions {
    public setAction: (item: any) => IPayloadAction<string, any>;

    constructor() {
       this.setAction = new ActionCreator<string, any>(SHOW_FILTERS_ACTIONS.SET).createActionCreator();
    }
}
