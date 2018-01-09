import React from 'react';
import { Component } from 'react';
import LoginAction from '../actions/LoginAction';
import AddDoctor from '../actions/AddDoctor';
import GetDoctor from '../actions/GetDoctor';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom';
import DoctorProfile from '../components/DoctorProfile';




class Profile extends Component{
  //  constructor (props) {
  //   super(props);
  //   this.state = {
  //     email: ""
  //   }
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }


  //  componentWillReceiveProps(newProps){
  // if(newProps.add.msg === "groovy"){
  //   // usr has logged in. Move them on
  //   newProps.history.push('/SavedDoctor');
  //   }
  // }
	render(){
    console.log(this.props.add)
    console.log(this.props.auth.doctor);

      if(this.props.add.length !== 0){
        var priCare = this.props.add.name
      }else{
        priCare = this.props.auth.doctor
      }
        // document.body.style.background = 'url("../images/background5.jpg") no-repeat center center fixed'
        document.body.style.backgroundSize = 'cover';
        // console.log(addDoctorData);

       
  // handleSubmit(event){
  //   event.preventDefault();
    
  //   console.log("making STRIDES");
  // }
 




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
    			<td>{this.props.auth.name}</td>
  			</tr>
  			<tr>
    			<th>Email:</th>
    			<td>{this.props.auth.email}</td>
  			</tr>
  			<tr>
    			<th>Phone:</th>
    			<td>{this.props.auth.phone}</td>
  			</tr>
  			<tr>
    			<th>Address:</th>
   				<td >In Your Heart</td>
  			</tr>
  			<tr>
    			<th>City:</th>
   				<td >{this.props.auth.city}</td>
  			</tr>
  			<tr>
    			<th>State:</th>
   				<td >{this.props.auth.state}</td>
  			</tr>
  			<tr>
  				<th>Zipcode:</th>
  			<td>{this.props.auth.zipcode}</td>
			</tr>
			<tr>
					
			<th>Insurance:</th>
			<td>{this.props.auth.insurance}</td>
		</tr>
		<tr>
			<th>Primary Care Physician:</th>
			<td><Link to={`/getDoctor/${this.props.auth.drID}`}>{priCare}</Link></td>
		</tr>
	 


                
               
            	
 				</tbody>
    		</table>
            </div>
             
            </div>
           
            </div>
    		
    		
    		
    
</div>
		)
	}
};




// function componentWillReceiveProps(props){
  
//     console.log(props);
  
// }

function mapStateToProps(state){
	// state = RootReducer
	return{
		auth: state.auth,
    add: state.add
		
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		loginAction: LoginAction,
    getDoctor: GetDoctor
	},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);