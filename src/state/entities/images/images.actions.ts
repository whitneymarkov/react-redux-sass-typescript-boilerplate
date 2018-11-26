
// tslint:disable:ordered-imports
import { IEntityState } from '../IEntityState';
import { IPayloadAction } from '../../utils/IPayloadAction';
import { ActionCreator } from '../../utils/ActionCreatorGenerator';
import { unsplashImages } from './images.reducer';
import { UNSPLASH_IMAGES_ACTIONS } from './images.types';
import { Dispatch, Store } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IRootState } from '../../RootStore';
import { IUnsplash } from '../../../tsmodel/unsplash/IUnsplash';

export interface IUnsplashActions {
    //
}

export class UnsplashActions implements IUnsplashActions {

    public addEntityAction: (entity: IUnsplash) => IPayloadAction<string, IUnsplash>;
    public addEntitiesAction: (entities: IUnsplash[]) => IPayloadAction<string, IUnsplash[]>;

    constructor() {
        this.addEntityAction = new ActionCreator<string, IUnsplash>(UNSPLASH_IMAGES_ACTIONS.ADD_ENTITY).createActionCreator();
        this.addEntitiesAction = new ActionCreator<string, IUnsplash[]>(UNSPLASH_IMAGES_ACTIONS.ADD_ENTITIES).createActionCreator();
    }

}
