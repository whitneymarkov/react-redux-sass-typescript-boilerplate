import { IPayloadAction } from '../../utils/IPayloadAction';
import { SELECTED_POST_ACTIONS } from './SelectedPost.types';

export const defaultSelectedPostState: string | number | null = null;

export const selectedPost = (state: string | number | null = defaultSelectedPostState, action: IPayloadAction<string, any>) => {
    switch (action.type) {
        case SELECTED_POST_ACTIONS.SET:
            return action.payload;
        default:
            return state;
    }
};
