import React from 'react';
import { Component } from 'react';
import LoginAction from '../actions/LoginAction';
import AddDoctor from '../actions/AddDoctor';
import GetDoctor from '../actions/GetDoctor';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom';
import DoctorProfile from '../components/DoctorProfile';
import EditProfile from './EditProfile';




class Profile extends Component{


	render(){
    console.log(this.props.add);
    console.log(this.props.auth);
    console.log(this.props.edit)
    console.log(this.props.auth.doctor);






      if(this.props.add.length !== 0){
        var priCare = this.props.add.name
        var priCareLink = this.props.add.drID
      }else{
        priCare = this.props.auth.doctor
        priCareLink = this.props.auth.drID
      }

      if(this.props.edit.length !== 0){
        var newProfile = this.props.edit
      }else{
        newProfile = this.props.auth
      }


        // document.body.style.background = 'url("../images/background5.jpg") no-repeat center center fixed'
        document.body.style.backgroundSize = 'cover';
        // console.log(addDoctorData);

       


        return(
			<div className="container profile-box z-depth-4">
        
    <div className="page-header">
	<h4>Welcome <small>{this.props.auth.name}</small></h4>
        </div>
        <div className="col s12">
        <div className="row">
           
           
              
                <div className="col s5 offset-s2">
               <table>
            
            	<tbody>
                   
            	<tr>
    				<th>Name:</th>
    			<td>{newProfile.name}</td>
  			</tr>
  			<tr>
    			<th>Email:</th>
    			<td>{newProfile.email}</td>
  			</tr>
  			<tr>
    			<th>Phone:</th>
    			<td>{newProfile.phone}</td>
  			</tr>
  			<tr>
    			<th>Address:</th>
   				<td >10 Cloverfield Lane</td>
  			</tr>
  			<tr>
    			<th>City:</th>
   				<td >{newProfile.city}</td>
  			</tr>
  			<tr>
    			<th>State:</th>
   				<td >{newProfile.state}</td>
  			</tr>
  			<tr>
  				<th>Zipcode:</th>
  			<td>{newProfile.zipcode}</td>
			</tr>
			<tr>
					
			<th>Insurance:</th>
			<td>{newProfile.insurance}</td>
		</tr>
		<tr>
			<th>Primary Care Physician:</th>
			<td><Link to={`/getDoctor/${priCareLink}`}>{priCare}</Link></td>
		</tr>
	 


                
               
            	
 				</tbody>
    		</table>
            </div>
            <div className="col s3">
                <img id="drPhoto" src = '../images/6d.png' />
            </div>
            <div className="col s12">
            <button className="btn btn-primary"  id="change-info-btn">
            <Link to='/EditProfile'>Edit Profile</Link></button>

    </div>
             
            </div>
           
            </div>
    		
    		
    		
    
</div>
		)
	}
};





function mapStateToProps(state){
	// state = RootReducer
	return{
		auth: state.auth,
    add: state.add,
    edit: state.edit
		
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		loginAction: LoginAction,
    getDoctor: GetDoctor,
    editProfile: EditProfile
	},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);