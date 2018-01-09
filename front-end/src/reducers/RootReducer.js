import { combineReducers } from 'redux';
import SearchActionReducer from './SearchActionReducer';
import AuthReducer from './AuthReducer';
import AddDoctorReducer from './AddDoctorReducer'



const RootReducer = combineReducers({
	searchResults : SearchActionReducer, //when user is searching for doctor
	auth: AuthReducer,
	add: AddDoctorReducer //for login and reg
})

export default RootReducer;