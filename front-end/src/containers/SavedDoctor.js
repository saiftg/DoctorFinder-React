import React, { Component } from 'react';
// import jquery from 'jquery';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';


class SavedDoctor extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : ''
        }
            // this.handleSubmit = this.handleSubmit.bind(this);

    }
//  handleSubmit(event){
//     event.preventDefault();
//     let doctorsInfo = sessionStorage.getItem('doctors');
//     var doctors = JSON.parse(doctorsInfo);//somehow we loose state - so I use localstorage
       
//         var doctorid = (this.props.match.params.id);
//     let doctor = doctors.filter((doc, index)=>{
//             return doc.id == doctorid
//         })
//      const addDoctorData = {
//        drName : doctor[0].fullName,
//        drID: doctor[0].uid,
//        drPractice: doctor[0].name,
//        drAddress: doctor[0].visitAddress,
//        drPhone: doctor[0].phoneArray[0].number,
//        drCity: doctor[0].city,
//        drState: doctor[0].state,
//        drZip: doctor[0].zip,
//        drPhoto: doctor[0].photo,
//        drToken: this.props.auth.token
//       }
//     this.props.addDoctor(addDoctorData);
//     console.log(addDoctorData);
    

    
//   }

// componentWillReceiveProps(newProps){
//   if(newProps.add.msg === "cool"){
//     // usr has logged in. Move them on
//     newProps.history.push('/profile');
//     }
//   }
   



	render(){
        // document.body.style.background = 'url("../images/background5.jpg") no-repeat center center fixed'
        // document.body.style.backgroundSize = 'cover'

        // let doctorsInfo = sessionStorage.getItem('doctors');
        // var doctors = JSON.parse(doctorsInfo);//somehow we loose state - so I use localstorage
        // console.log("from sessionStorage ", doctors, typeof(doctors))
		
        console.log("RIIIIIIMEEXXXX");
        console.log(this.props);
        console.log("REIIIIIMEEXXXX");

        // var doctorid = (this.props.match.params.id);
        // // console.log(doctorid);
        // //now we need to filter through array of doctors to filter out the one with uid
        // let doctor = doctors.filter((doc, index)=>{
        //     return doc.id == doctorid
        // })
        // console.log(doctor);
        // console.log(typeof(doctor[0].phoneArray))
        // var x = JSON.stringify(doctor[0].phoneArray[0]);
        // console.log(x);
        

        //     x = x.replace(/\D+/g, '')
        //     .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
        //     console.log(x)


 



        return(

        	<div>
        	<h2>Hello</h2>
        	</div>
			
		)
	}
}
// function mapStateToProps(state){
//   return{
//     auth: state.auth,
//     add: state.add
//   }
// }

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({
//     addDoctor: AddDoctor,
//   }, dispatch);
// }


export default SavedDoctor;
