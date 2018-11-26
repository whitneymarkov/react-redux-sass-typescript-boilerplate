import { IRootState } from '../../RootStore';

const get = (state: IRootState) => {
    return state.global.selectedPost;
};

const getSelectedPost = (state: IRootState) => {
    // const key = get(state);
    // let result = null;

    // if (key !== null) {
    //     result = state.entities.unsplashImages[key] || null;
    // }

    // return result;
};

export const SelectedCommissionSelectors = {
    get,
    getSelectedPost,
};
