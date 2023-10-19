import React, { Component } from 'react';
class LocationButton extends Component {
    handleDetectLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          this.handleLocationSuccess,
          this.handleLocationError
        );
      } else {
        alert('Geolocation is not supported by your browser.');
      }
    };
  
    handleLocationSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      alert(`Your location: Latitude - ${latitude}, Longitude - ${longitude}`);
    };
  
    handleLocationError = (error) => {
      alert(`Error getting location: ${error.message}`);
    };
  
    render() {
      return (
        <button onClick={this.handleDetectLocation}>Detect My Location</button>
      );
    }
  }
  
  export default LocationButton;
  