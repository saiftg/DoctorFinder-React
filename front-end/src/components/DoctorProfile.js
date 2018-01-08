import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DoctorMap from './DoctorMap';
import jquery from 'jquery'

class DoctorProfile extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         name : ''
    //     }
    //         this.handleSubmit = this.handleSubmit.bind(this);

    // }

   



	render(){
        document.body.style.background = 'url("../images/background5.jpg") no-repeat center center fixed'
        document.body.style.backgroundSize = 'cover'

        let doctorsInfo = sessionStorage.getItem('doctors');
        var doctors = JSON.parse(doctorsInfo);//somehow we loose state - so I use localstorage
        console.log("from sessionStorage ", doctors, typeof(doctors))
		console.log(this.props);
        var doctorid = (this.props.match.params.id);
        // console.log(doctorid);
        //now we need to filter through array of doctors to filter out the one with uid
        let doctor = doctors.filter((doc, index)=>{
            return doc.id == doctorid
        })
        console.log(doctor);
        console.log(typeof(doctor[0].phoneArray))
        var x = JSON.stringify(doctor[0].phoneArray[0]);
        console.log(x)

            x = x.replace(/\D+/g, '')
            .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
            console.log(x)


  // handleSubmit(event){
  //   event.preventDefault();
    
  //   console.log({doctor[0].visitAddress});
  // }




        return(
			<div className="container profile-box z-depth-4">
        
    <div className="page-header">
        <h4>{doctor[0].fullName}</h4>
        </div>
        <div className="col s12">
        <div className="row">
           
           
              
                <div className="col s5 offset-s2">
               <table>
            
            	<tbody>
                   
            	<tr>
            		<th>Practice:</th>
            		<td>{doctor[0].name}</td>
            		</tr>          
            	<tr>
                	<th>Address:</th>
   					<td>{doctor[0].visitAddress}<br />{doctor[0].city}, {doctor[0].state}<br />{doctor[0].zip}</td>
            	</tr>
            	
            	<tr>
                    <th>Phone:</th>
                    <td>{x}</td>

            	</tr>



                
               
            	
 				</tbody>
    		</table>
            </div>
             <div className="col s3">
                <img id="drPhoto" src = {doctor[0].photo} />
            </div>
            </div>
            <div className="row">
            <div className="col s1 offset-s2">Bio:</div>
            <div className="col s7 ">
                {doctor[0].bio}
                </div>
                <div className="col s12">
            <button className="btn btn-primary" onClick={this.handleSubmit} id="change-info-btn">Change Info</button>

    </div>
            </div>
    		
    		
    		</div>

    
</div>
		)
	}
}


export default DoctorProfile;