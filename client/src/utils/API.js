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
  },
  // Gets the logged in user
  getUser: function() {
    return axios.get("/api/user")
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
  },
  getTasks: function() {
    return axios.get("/api/tasks");
  },
  getTask: function(id) {
    return axios.get("api/posts/" + id);
  },
  deleteTask: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  saveTask: function(taskData) {
    return axios.post("/api/posts", taskData);
  },
  createComment: function(comment) {
    return axios.post(`/api/posts/${comment.postID}/comments`, comment);
  }
};
