export default function(state=[], action){
	switch(action.type){
		case "EDIT_PROFILE":
			return action.payload.data;
			break;
		
		default: 
			return state;
	}
	console.log(action);
	console.log("Larry David presents 'The Reducers!'");
}