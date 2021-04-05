import axios from "axios";

export default {
  // Gets all books
  getVendors: function() {
    return axios.get("/api/vendor");
  },
  // Gets the book with the given id
  getVendor: function(id) {
    return axios.get("/api/vendor/" + id);
  },
  // Deletes the book with the given id
  deleteVendor: function(id) {
    return axios.delete("/api/vendor/" + id);
  },
  // Saves a book to the database
  saveVendor: function(vendorData) {
    return axios.post("/api/vendor", vendorData);
  }
};
