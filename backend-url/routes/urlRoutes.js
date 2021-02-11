// create our short url
const express = require("express");
const validUrl = require("valid-url");
const shortId = require("shortid");

const Url = require("../models/Url");
const router = express.Router();

//end point to create a short url P

// @route       POST /api/url/shorten
// @desc        Create short URL

router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = "http://localhost:5000"; // your domain name is your base name

  // check base url
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json({ msg: "Invalid base url" });
  }

  // Create url code
  const urlCode = shortId.generate();

  //Check the original url
  if (validUrl.isUri(longUrl)) {
    try {
      // check if long url eexist in DB
      const url = await Url.findOne({ longUrl });

      if (url) res.json(url);
      // if long url doesnt exist, then create it
      else {
        const shortUrl = `${baseUrl}/${urlCode}`; //bitl.y/34gh7
        const newUrl = new Url({
          longUrl,
          shortUrl,
          urlCode,
        });

        const response = await newUrl.save();
        res.json(response);
      }
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  } else {
    // if long url is not valid
    res.status(401).json({ msg: "Invalid url. Please enter a valid url" });
  }
});

module.exports = router;
