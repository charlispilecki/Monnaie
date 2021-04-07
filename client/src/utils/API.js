import axios from "axios";

export default {
  // Gets all books
  getVendors: function() {
    return axios.get("/api/vendors");
  },
  // Gets the book with the given id
  getVendor: function(id) {
    return axios.get("/api/vendors/" + id);
  },
  // Deletes the book with the given id
  deleteVendor: function(id) {
    return axios.delete("/api/vendors/" + id);
  },
  // Saves a book to the database
  saveVendor: function(vendorData) {
    return axios.post("/api/vendors", vendorData);
  },
  // Gets the logged in user
  getUser: function() {
    return axios.get("/api/user");
  },
  addBudgetCategory: function(category) {
    return axios.post("/api/categories", category);
  },
  updateBudgetCategories: function(categories) {
    return axios.put("/api/categories", categories);
  },
  getPosts: function() {
    return axios.get("/api/posts");
  },
  createPost: function(post) {
    return axios.post("/api/posts", post);
  }
};
