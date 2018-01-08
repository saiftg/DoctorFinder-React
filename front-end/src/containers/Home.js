import React, { Component } from 'react';

class Home extends Component{

	render(){
		document.body.style.background = 'url("../images/background7.jpg") no-repeat center center fixed'
		document.body.style.backgroundSize = 'cover'
		return(
			
			<div className='row'>
			<div className="home-box col s6 offset-s5">Login Stuff</div>
			</div>
			

			)

	}
}

export default Home;