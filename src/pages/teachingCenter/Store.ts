import {Action, StoreEnum} from "./typing";

export const State = {};

export const init = (state: any) => {
    return state
};

export const reducer = (state: any, action: Action) => {
    switch (action.type) {
        // 更换教材
        case StoreEnum.CTM:
            return Object.assign({}, state, {[StoreEnum.CTM]: action.value});
    }
};