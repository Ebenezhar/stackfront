import {combineReducers} from 'redux'
import accountReducers from './accountReducers';

const reducers = combineReducers({
    account: accountReducers,
})
export default reducers;