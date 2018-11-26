import { combineReducers } from 'redux';
import { defaultShowFiltersState, showFilters } from './show-filters/ShowFilters.reducer';

export interface IUIReducerState {
    showFilters: boolean;
}

export const defaultUIState: IUIReducerState = {
    showFilters: defaultShowFiltersState,
};

export const ui = combineReducers({
    showFilters,
});
