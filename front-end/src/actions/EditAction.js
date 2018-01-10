import axios from 'axios';

export default function(formData){
	console.log(formData);

	var axiosPromise = axios({
		method: "POST",
		url: `${window.apiHost}/update`,
		data: formData
	})

	console.log("We tryna edit profiles over hurr")

	return{
		type: "EDIT_PROFILE",
		payload: axiosPromise
	}

}