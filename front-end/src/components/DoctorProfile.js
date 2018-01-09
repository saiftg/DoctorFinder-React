import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DoctorMap from './DoctorMap';
import jquery from 'jquery';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AddDoctor from '../actions/AddDoctor';
import './hidden.css';

class DoctorProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : ''
        }
            this.handleSubmit = this.handleSubmit.bind(this);

    }
 handleSubmit(event){
    event.preventDefault();
    let doctorsInfo = sessionStorage.getItem('doctors');
    var doctors = JSON.parse(doctorsInfo);//somehow we loose state - so I use localstorage
       
        var doctorid = (this.props.match.params.id);
    let doctor = doctors.filter((doc, index)=>{
            return doc.id == doctorid
        })
     const addDoctorData = {
       drName : doctor[0].fullName,
       drID: doctor[0].uid,
       drPractice: doctor[0].name,
       drAddress: doctor[0].visitAddress,
       drPhone: doctor[0].phoneArray[0].number,
       drCity: doctor[0].city,
       drState: doctor[0].state,
       drZip: doctor[0].zip,
       drPhoto: doctor[0].photo,
       drToken: this.props.auth.token
      }
    this.props.addDoctor(addDoctorData);
    console.log(addDoctorData);
    

    
  }

componentWillReceiveProps(newProps){
  if(newProps.add.msg === "cool"){
    // usr has logged in. Move them on
    newProps.history.push('/profile');
    }
  }
   



	render(){
        document.body.style.background = 'url("../images/background5.jpg") no-repeat center center fixed'
        document.body.style.backgroundSize = 'cover'

        let doctorsInfo = sessionStorage.getItem('doctors');
        var doctors = JSON.parse(doctorsInfo);//somehow we loose state - so I use localstorage
        console.log("from sessionStorage ", doctors, typeof(doctors))
		
        console.log("MEEXXXX");
        console.log(this.props);
        console.log(this.props.auth.token);
        console.log("MEEXXXX");

        var doctorid = (this.props.match.params.id);
        // console.log(doctorid);
        //now we need to filter through array of doctors to filter out the one with uid
        let doctor = doctors.filter((doc, index)=>{
            return doc.id == doctorid
        })
        console.log(doctor);
        console.log(typeof(doctor[0].phoneArray))
        var x = JSON.stringify(doctor[0].phoneArray[0]);
        console.log(x);
        

            x = x.replace(/\D+/g, '')
            .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
            console.log(x)


 



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
function mapStateToProps(state){
  return{
    auth: state.auth,
    add: state.add
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addDoctor: AddDoctor,
  }, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(DoctorProfile);
