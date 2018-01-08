console.log("local doctor info module loaded")
//this module will assemble data that we need on front end
const doctorInfo = (profile, locations)=>{
	// console.log("profile", profile);
	console.log("location", locations);
	//we are going to make a big json with all possible info that we need
	if (profile.title){
		var fullName = profile.first_name + " " + profile.last_name + " " + profile.title
	}else{
		fullName = profile.first_name + " " + profile.last_name
	}
	console.log("full doctor's name is: ", fullName)
	var doctorData = locations.map((location, index)=>{
		if (location.visit_address.street2){
			var address = location.visit_address.street + ' ' + location.visit_address.street2;
		}else{
			address = location.visit_address.street;
		}
		var id = index + 1;
		return {
			id : id,
			fullName : fullName,
			visitAddress : address,
			city : location.visit_address.city,
			state : location.visit_address.state_long,
			zip : location.visit_address.zip,
			phoneArray : location.phones,
			lat : location.lat,
			lng : location.lon,
			
			photo : profile.image_url,
			uid: location.uid,
			bio: profile.bio,
			specialty: profile.specialty,
			name: location.name,
			distance: location.distance,
			website: location.website
			
		}
	})
	return doctorData;
}

module.exports.doctorInfo = doctorInfo;
