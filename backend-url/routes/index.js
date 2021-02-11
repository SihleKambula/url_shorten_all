// short urls to redirect to long urls
const express = require("express");

const Url = require("../models/Url");
const router = express.Router();

// @route     GET/:code
// @desc      Redirect to original Url

router.get("/:code", async (req, res) => {
  try {
    // find shorten url by code
    const url = await Url.findOne({ urlCode: req.params.code });

    // If found redirect to original
    if (url) res.redirect(url.longUrl);
    else res.status(404).json({ msg: "No url found" });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

module.exports = router;
