import { IRootState } from '../../RootStore';

const getShowFilters = (state: IRootState) => {
    return state.ui.showFilters;
};

export const SelectedCommissionSelectors = {
    getShowFilters,
};
