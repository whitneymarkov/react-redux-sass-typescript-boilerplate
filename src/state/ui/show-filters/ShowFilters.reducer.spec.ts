import { ShowFiltersActions } from './ShowFilters.actions';
import { showFilters } from './ShowFilters.reducer';
import { SHOW_FILTERS_ACTIONS } from './ShowFilters.types';

const value1: boolean = false;
const value2: boolean = true;
const value3: boolean = false;

const defaultState = false;

const actionCreator = new ShowFiltersActions();

describe('showFilters reducer', () => {
    it('Should return state containing the new item when action SET is dispatched and state is null | undefined', () => {
        const reduced1 = showFilters(false, actionCreator.setAction(value1));
        expect(reduced1).toEqual(value1);
        expect(reduced1 === value2).toBe(false);

        const reduced2 = showFilters(undefined, actionCreator.setAction(value3));
        expect(reduced2).toEqual(value3);
        expect(reduced2 === value2).toBe(false);
    });

    it('Should return new state when SET action is dispatched and state is x', () => {
        const reduced1 = showFilters(value3, actionCreator.setAction(value1));
        expect(reduced1).toEqual(value1);
        expect(reduced1 === value2).toBe(false);

        const reduced2 = showFilters(value1, actionCreator.setAction(value3));
        expect(reduced2).toEqual(value3);
        expect(reduced2 === value2).toBe(false);
    });

});
