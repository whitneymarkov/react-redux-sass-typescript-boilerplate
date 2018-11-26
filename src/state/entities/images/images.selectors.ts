import { createSelector } from 'reselect';
import { IRootState } from '../../RootStore';
import { IEntityState } from '../IEntityState';
import { IUnsplash } from '../../../tsmodel/unsplash/IUnsplash';

const getEntity = (state: IRootState, id: string | number) => state.entities.unsplashImages[id];
const getEntityState = (state: IRootState) => state.entities.unsplashImages;

const getAllEntities = createSelector(
    getEntityState,
    (state: IEntityState<IUnsplash>) => {
        return Object.keys(state).map((id: string | number) => state[id]);
    });

export const UsersSelectors = {
    getAllEntities,
    getEntity,
};
