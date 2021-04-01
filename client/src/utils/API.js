import axios from "axios";

export default {
  // Gets all vendors
  getVendors: function() {
    return axios.get("/api/vendors");
  },
  // Gets the vendor with the given id
  getVendor: function(id) {
    return axios.get("/api/vendor/" + id);
  },
  // Deletes the vendor with the given id
  deleteVendor: function(id) {
    return axios.delete("/api/vendors/" + id);
  },
  // Saves a vendor to the database
  saveVendor: function(vendorData) {
    return axios.post("/api/vendors", vendorData);
  }
};
