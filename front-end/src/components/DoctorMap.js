import React from "react"
import { compose, withProps } from "recompose"; //react utility belt for function components and higher-order compoenets.
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
const google = window.google; //this takes care of an error that google is not defined
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");


const MyMapComponent = compose(
  withProps({
    // googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    googleMapURL:  'https://maps.googleapis.com/maps/api/js?key=AIzaSyBehz0GVd8SbdQVMswQlcV-cx0yjExniA0&v=3.exp&libraries=geometry,drawing,place',
    loadingElement: <div style={{ height: `100%`}} />,
    containerElement: <div style={{ height: `90vh`}} />,
    mapElement: <div style={{ height: `100%`, top: '4em' }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: props.myloc.lat, lng: props.myloc.lng}}
  > {console.log(props.myloc)}
    return
    <MarkerWithLabel 
    position={ props.myloc }
    labelAnchor={new google.maps.Point(30,55)}
    labelStyle={{backgroundColor: "blue", fontSize: "10px", color:"white", padding: "3px"}}
    defaultIcon = {{url:'https://cdn4.iconfinder.com/data/icons/32x32-free-design-icons/32/Home.png', width: '10px'}}
    // label = {"You are here"}
    animation = {google.maps.Animation.DROP}
    onMouseOver = {()=>{console.log(props.myloc)}}

     >
     <div>You are Here</div>
     </MarkerWithLabel>
    {props.doctors.map((map, index)=>{
      return <Marker key={index} position={{ lat: map.lat, lng: map.lng }} animation={google.maps.Animation.DROP} onMouseOver={()=>{props.onMarkerHover(map.id)}} onMouseOut={()=>{props.onMouseOut(map.id)}} /> 
    })}
  </GoogleMap>
)

class DoctorMap extends React.PureComponent {

  mouseOverMarker = (id) => {
    this.props.hoverFunc(id);
    console.log("over marker with Id: ", id);
    // this.props.markerIdAction(id);
    // console.log(this.props.hover)
  }

  handleMouseOver = (id) => {
    console.log("mouse out of marker")
    this.props.mouseOut(id);
  }

  render() {
    const doctors = this.props.doctors;
    const myloc = this.props.myloc;
      return(
          <MyMapComponent 
          onMarkerHover={this.mouseOverMarker}
          onMouseOut={this.handleMouseOver} 
          doctors = {doctors} 
          myloc = {myloc} />    
       )
  }
}

export default DoctorMap;