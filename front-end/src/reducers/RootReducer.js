import { combineReducers } from 'redux';
import SearchActionReducer from './SearchActionReducer';
import SelectMarkerReducer from './SelectMarkerReducer';
import AuthReducer from './AuthReducer';
import AddDoctorReducer from './AddDoctorReducer';
import getDoctorReducer from './getDoctorReducer';
import EditProfileReducer from './EditProfileReducer';



const RootReducer = combineReducers({
	searchResults : SearchActionReducer, //when user is searching for doctor
	auth: AuthReducer,
	add: AddDoctorReducer,
	edit: EditProfileReducer,
	get: getDoctorReducer, 
	// selectMarker: SelectMarkerReducer//for login and reg
})

export default RootReducer;