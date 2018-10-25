import React, { Component } from "react";
import API from "../../utils/API";

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
  width: '100%',
  height: '50%'
}

let app = {
  locations: []
}

export class MapContainer extends Component {
  state = {
    locations: [],
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    
  };

  
  


  componentDidMount() {
    this.loadLocations();
  }

  loadLocations = () => {
    API.getLocations()
      .then(res =>
        this.setState({ locations: res.data})
      )
      .catch(err => console.log(err));
  };

  
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }
  
  render() {
    return (
      
      <Map google={this.props.google} 
          style={style}
          initialCenter={{
            lat: 39.952583,     
            lng: -75.165222
          }}
          zoom={14}>
           
          <Marker 
          title={'Grocery store'}
          onClick={this.onMarkerClick}
          name={'Target'}
          deal={'5% OFF'}
          position={{lat: 39.951630, lng: -75.172100}} />

          <Marker 
          title={'Tourism'}
          onClick={this.onMarkerClick}
          name={'City hall'}
          deal={'$ 2 Off'}
          position={{lat: 39.952583, lng: -75.165222}} />

          <Marker
          title={'Restaurant'}
          onClick={this.onMarkerClick}
          name={'Seventh Heaven'}
          deal={'5% off'}
          position={{ lat: 39.952533, lng: -75.171656 }} />

          <Marker
          title={'Restaurant'}
          onClick={this.onMarkerClick}
          name={'Vedge'}
          deal={'5% off'}
          position={{ lat: 39.948080, lng: -75.161380 }} />

          <Marker
          title={'Theatre'}
          onClick={this.onMarkerClick}
          name={'The Tuttleman IMAX® Theater'}
          deal={'$4 off'}
          position={{ lat: 39.958290, lng: -75.172142 }} />
        
          
         <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
              <p>{this.state.selectedPlace.deal}</p>
            </div>
        </InfoWindow>
        </Map>
      
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDqyyAR_LnkowfFljHgQNTzPYcE5VEp4b4")
})(MapContainer)





// <Marker 
// //   title={'Seventh Heaven - Fresh rolled ice cream.'}
// //   onClick={this.onMarkerClick}
// //   name={'Seventh Heaven'}
// //   deal={'5% off'}
// //   position={{lat: 39.952533, lng: -75.171656}} />


 