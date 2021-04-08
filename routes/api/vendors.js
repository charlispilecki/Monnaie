const router = require("express").Router();
const vendorsController = require("../../controllers/vendorsController");

// Matches with "/api/vendors"
router.route("/")
  .get(vendorsController.findAll)
  .post(vendorsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(vendorsController.findById)
  .put(vendorsController.update)
  .delete(vendorsController.remove);

module.exports = router;










