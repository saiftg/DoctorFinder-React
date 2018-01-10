import React, { Component } from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Autosuggest from 'react-autosuggest';
import Insurance from '../components/Insurance';
import { FormErrors } from './TestFormErrors';
import RegisterAction from '../actions/RegisterAction';

import "./Register.css";


// const insurance = Insurance;
// console.log(insurance);

class Register extends Component{
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      phone: '',
      formErrors: {email: '', password: '', phone: '', zipcode: ''},
      emailValid: false,
      passwordValid: false,
      phoneValid: false,
      zipcodeValid: false,
      formValid: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUserInput = (event) => {                                                                    
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let phoneValid = this.state.phoneValid;
    let zipcodeValid = this.state.zipcodeValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Email address is invalid';
        break;
      case 'password':
        passwordValid = (value.length >= 6);
        fieldValidationErrors.password = passwordValid ? '': 'Password is too short';
        break;
      case 'phone':
        phoneValid = (value.length === 10);
        fieldValidationErrors.phone = phoneValid ? '': 'Phone # must be 10 digit number';
        break;
      case 'zipcode':
        zipcodeValid = (value.length === 5);
        fieldValidationErrors.zipcode = zipcodeValid ? '': ' Zip must be 5 digit number';
        break; 

      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                    phoneValid: phoneValid,
                    zipcodeValid: zipcodeValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.phoneValid && this.state.zipcodeValid,
                   emailValid:this.state.emailValid 
                    });
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }


	handleSubmit(event){
		event.preventDefault();
		console.log("handleSubmit fired up");
		var formData = {
			 name : event.target[0].value,
			 email : event.target[1].value,
       password : event.target[2].value,
			 insuranceType : event.target[3].value,
			 
			 city : event.target[4].value,
			 state : event.target[5].value,
       zipcode: event.target[6].value,
			 phoneNumber : event.target[7].value,

		}
    console.log(formData);
    this.props.registerAction(formData);
	};


  componentWillReceiveProps(newProps){
    console.log(newProps);
  // if(newProps.auth.msg === "wrongPassword"){
  //   this.setState({
  //     error: "This password does not match."
  //   });
  // }else if(newProps.auth.msg === "badUser"){
  //   this.setState({
  //     error: "We do not have an account for this email address."
  //   })
  // }else 
    if(newProps.auth.msg === "success"){
    // usr has logged in. Move them on
    newProps.history.push('/profile');
    }else if(newProps.auth.msg === "alreadyin"){
      // newProps.history.push('/register');
      this.setState({
        error: "This email has been registered already. Try again"
      });
    }
  }


	render(){

	return(
        <div className = "register">
            

         <form  className='col s12' onSubmit={this.handleSubmit}>
          
                <div className='row'>

               <label htmlFor="name"></label>
               <div className="input-field col s12">
               <i className="material-icons prefix icons">account_circle</i>
               <input type="text"  name="name"
                    id="name" 
                    className="active validate"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleUserInput}  />
                    </div>

              <label htmlFor="email"></label>
              <div className="input-field col s12">
              <i className="material-icons prefix icons">email</i>
              <input type="email"  name="email"
                placeholder="Email Address"
                value={this.state.email}
                onChange={this.handleUserInput}  />
                <FormErrors formErrors={this.state.formErrors.email} />
                </div>

              <label htmlFor="password"></label>
              <div className="input-field col s12">
              <i className="material-icons prefix icons">vpn_key</i>
              <input type="password" name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleUserInput}  />
                </div>
                <FormErrors formErrors={this.state.formErrors.password} />

              <label htmlFor="insurance"></label>
              <div className="input-field col s12">
              
              <i className="material-icons prefix icons">code</i>
              <Insurance id="insurance" />
          {/*    <input type="text"  name="insurance"
                placeholder="Select Insurance Type"
                value={this.state.insurance}
                onChange={this.handleUserInput}  />*/}

               </div>

              <label htmlFor="city"></label>
              <div className="input-field col s12">
              <i className="material-icons prefix icons">code</i>
              <input type="text"  name="city"
                placeholder="City"
                value={this.state.city}
                onChange={this.handleUserInput}  />
                </div>

              <label htmlFor="state"></label>
              <div className="input-field col s12">
              <i className="material-icons prefix icons">code</i>
              <input type="text" name="state"
                placeholder="State"
                value={this.state.state}
                onChange={this.handleUserInput}  />
                </div>

              <label htmlFor="zipcode"></label>
              <div className="input-field col s12">
              <i className="material-icons prefix icons">code</i>
              <input type="number" name="zipcode"
                placeholder="Zip Code (US)"
                value={this.state.zipcode}
                onChange={this.handleUserInput}  />  
                </div>
                <FormErrors formErrors={this.state.formErrors.zipcode} />

              <label htmlFor="phone"></label>
              <div className="input-field col s12">
              <i className="material-icons prefix icons">phone</i>
              <input type="number" name="phone"
                placeholder="Telephone Number"
                value={this.state.phone}
                onChange={this.handleUserInput}  />
                </div>
                <FormErrors formErrors={this.state.formErrors.phone} />
        <button type="submit" className="btn waves-effect waves-light"

        disabled={!this.state.formValid}>Register!
        <i className="material-icons right">send</i></button>
                </div>
            </form>
        </div>


      
		);
	}
}

function mapStateToProps(state){
  return{
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    registerAction: RegisterAction,
  }, dispatch);
}








export default connect(mapStateToProps,mapDispatchToProps)(Register);