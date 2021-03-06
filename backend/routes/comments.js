const express = require("express");
const auth = require("../middleware/auth");
const commentCtrl = require("../controllers/comments");
const router = express.Router();

// Routes

router.post("/:id/comment", auth, commentCtrl.createComment);
router.get("/:id/comments", auth, commentCtrl.getComments);

module.exports = router;
