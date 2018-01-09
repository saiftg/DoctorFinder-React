import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

 
class DoctorResults extends Component{


	mouseHandler(info,offOrOn){
		console.log(info, offOrOn)
		if(offOrOn == "on"){
			this.props.oneDoctorMarker(info)
		}else{
			this.props.oneDoctorMarker('')
		}
	}

	render(){
		// console.log(this.props.profile);
		const profile = this.props.profile;
		var phoneNumber = JSON.stringify(profile.phoneArray[0].number);
            phoneNumber = phoneNumber.replace(/\D+/g, '')
            .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
        // var distance = Math.round(profile.distance *100) / 100
        var distance = (profile.distance.toFixed(2)) // another way of rounding
        console.log(distance)

        const marker = {
			lat : profile.lat,
			lng : profile.lng,
			id: profile.id
		}
		// const phones = profile.phoneArray.length;
		// console.log("this many phones in practice", phones)
		// console.log(profile.phoneArray)
			return(

			<div id={`doctor-${profile.id}`}>
			<div className="big-box">
				<div className="row">
					<div className="doctor-results-box z-depth-5 col s12">
						<div className="col s3 "><img src={profile.photo} className="photo" alt="doctor's pic" /></div>
						<h5 className ="name-results"><Link to={`/doctor/${profile.id}`}>{profile.fullName}</Link></h5>
	        			<div className="practice-results">{profile.name}</div>
	        			<div className="practice-street-results">{profile.visitAddress}</div>
						<div className="practice-city-state-zip-results">{profile.city}, {profile.state}, {profile.zip}</div>
	        			<div className="phone-results">{phoneNumber}
	        			</div>
	        			<div className="distance-results">{distance} Miles</div>	
	        		</div>
				</div> 
			</div>
			</div>			
		)
	}
}			



export default DoctorResults;

