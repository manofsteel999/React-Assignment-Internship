const express = require("express");
const router = express.Router();
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/register", (req, res) => {
  const { email, password } = req.body;

  try {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return res.status(422).send("error in generating salt");
      }

      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) {
          return res.status(422).send("error in hashing");
        }

        const user = new User({
          email,
          password: hash,
        });

        const newUser = await user.save();
        console.log("SAVED");
        const token = jwt.sign({ userId: req.body.id }, "MY_SECRET_KEY");
        res.send({
          token,
          email,
        });
      });
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/app/login/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(422).send("Id is not present");
  }
  const user = await User.findOne({
    RestaurantId: id,
  });
  if (!user) {
    return res.status(422).send("User Not found");
  }
  res.send(user);
});

router.post("/api/login", async (req, res) => {
  const { UserId, Password } = req.body;

  try {
    if (!UserId || !Password) {
      return res.status(422).send("No Id or Password");
    }

    const user = await User.findOne({
      "Customers.UserId": UserId,
      "Customers.Password": Password,
    });

    if (!user) {
      return res.send("User does not exist");
    }

    // console.log(user.Customers[0]);
    res.send(user.Customers[0]);
  } catch (err) {
    return res.status(422).send(err);
  }
});

module.exports = router;
