import axios from "axios";

export default {
  // Gets all locations
  getLocations: function() {
    return axios.get("/api/locations");
  },
  // Saves a book to the database
  saveLocation: function(locationData) {
    return axios.post("/api/locations", locationData);
  }
};