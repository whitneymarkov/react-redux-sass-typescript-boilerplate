import { SHOW_FILTERS_ACTIONS } from './ShowFilters.types';
import { IPayloadAction } from '../../utils/IPayloadAction';

export const defaultShowFiltersState: boolean = false;

export const showFilters = (state: boolean = defaultShowFiltersState, action: IPayloadAction<string, any>) => {
    switch (action.type) {
        case SHOW_FILTERS_ACTIONS.SET:
            return action.payload;
        default:
            return state;
    }
};
