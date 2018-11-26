import { combineReducers } from 'redux';
import { IUnsplash } from '../../tsmodel/unsplash/IUnsplash';
import { IEntityState } from './IEntityState';
import { unsplashImagesDefaultState, unsplashImages } from './images/images.reducer';

export interface IEntityReducerState {
    unsplashImages: IEntityState<IUnsplash>;
}

export const defaultEntityState: IEntityReducerState = {} as any;
defaultEntityState['unsplashImages'] = unsplashImagesDefaultState;

export const entities = combineReducers<IEntityReducerState>({
    unsplashImages,
});
