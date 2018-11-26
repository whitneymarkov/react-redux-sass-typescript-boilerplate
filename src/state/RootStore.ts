import { createStore, combineReducers, compose, Store, applyMiddleware } from 'redux';
import { IUIReducerState, defaultUIState, ui,  } from './ui/ui.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IGlobalReducerState, defaultGlobalState, global } from './global/global.reducer';
import { IEntityReducerState, defaultEntityState, entities } from './entities/entities.reducer';

export interface IRootState {
    entities: IEntityReducerState;
    global: IGlobalReducerState;
    ui: IUIReducerState;
}

const initialState: IRootState = {
    entities: defaultEntityState,
    global: defaultGlobalState,
    ui: defaultUIState,
};

const storeReducer = combineReducers<IRootState>({
    entities,
    global,
    ui,
});

const store = createStore<IRootState, any, any, any>(
    storeReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(),
    )
);

export { store };




