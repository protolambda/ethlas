import {combineReducers} from 'redux'
import settingsReducer from "./settings/red";
import themeReducer from "./theme/red";
import dataReducer from "./data/red";

const reducer = combineReducers({
    settings: settingsReducer,
    theme: themeReducer,
    data: dataReducer
});

export default reducer;
