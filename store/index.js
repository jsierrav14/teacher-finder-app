import {createStore,combineReducers,applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import teacherReducer from './reducers/teacher.reducer'

const rootReducer = combineReducers({
    teachers:teacherReducer
})

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;



