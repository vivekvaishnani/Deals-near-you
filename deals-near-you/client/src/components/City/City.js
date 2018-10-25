import React, { Component } from "react";
import "./City.css";

class CityForm extends Component {

  state = {
    cityName: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   const { name} = event.target;
  //     this.setState({
  //     [name]: ""
  //   });
        
   
  // };

  render() {

    return (
      <div>
        <div id="city-form" className="container">
          <form className="form">Enter city name :
          <input
            type="text"
            className="form-control city-form-input"
            value={this.state.title}
            onChange={this.handleInputChange}
            name="cityName"
            // onChange={this.handleInputChange}
            placeholder="city name"
          />

          <button 
          type="submit" 
          className="btn btn-primary"
          disabled={!(this.state.cityName)}
          onClick={this.handleFormSubmit}
          >Submit</button>

          </form>
        </div>
      </div>
    );
  }

}

export default CityForm;