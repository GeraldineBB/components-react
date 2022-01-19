import { combineReducers } from "redux";

import profilReducer from "./profil";


const rootReducer = combineReducers({
  profil: profilReducer,
});

export default rootReducer;