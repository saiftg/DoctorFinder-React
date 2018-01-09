import axios from 'axios';

export default function(formData){

	var axiosPromise = axios({
		method: "POST",
		url: `${window.apiHost}/getDoctor`,
		data: formData
	})

	console.log("Getting doc info")

	return{
		type: "ADD_DOCTOR",
		payload: axiosPromise
	}

}