// tslint:disable:ordered-imports
import { IPayloadAction } from '../../utils/IPayloadAction';
import { IEntityState, isIMinimalEntity, isIMinimalEntityArray } from '../IEntityState';
import { UNSPLASH_IMAGES_ACTIONS } from './images.types';
import { IUnsplash } from '../../../tsmodel/unsplash/IUnsplash';

export const unsplashImagesDefaultState: IEntityState<IUnsplash> = {};

export const unsplashImages = (state: IEntityState<IUnsplash> = unsplashImagesDefaultState, action: IPayloadAction<string, IUnsplash | IUnsplash[] | IEntityState<IUnsplash> | number | string | Array<number | string>>) => {
    switch (action.type) {
        case UNSPLASH_IMAGES_ACTIONS.ADD_ENTITY:
            const entityToAdd = action.payload;
            if (isIMinimalEntity(entityToAdd)) {
                const newState1 = { ...state };
                newState1[entityToAdd.id] = entityToAdd;
                return newState1;
            } else {
                return state;
            }

        case UNSPLASH_IMAGES_ACTIONS.ADD_ENTITIES:
            const entitiesToAdd = action.payload;
            if (isIMinimalEntityArray(entitiesToAdd)) {
                const newState2 = { ...state };
                entitiesToAdd.forEach((entity: IUnsplash) => {
                    newState2[entity.id] = entity;
                });
                return newState2;
            } else {
                return state;
            }

        default:
            return state;
    }
};
