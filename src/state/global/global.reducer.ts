import { combineReducers } from 'redux';
import { defaultSelectedPostState, selectedPost } from './selected-post/SelectedPost.reducer';

export interface IGlobalReducerState {
    selectedPost: string | number | null;
}

export const defaultGlobalState: IGlobalReducerState = {
    selectedPost: defaultSelectedPostState,
};

export const global = combineReducers({
    selectedPost,
});
