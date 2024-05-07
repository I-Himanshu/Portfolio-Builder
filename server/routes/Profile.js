const Profile = require("../Models/ProfileModel");
const router = require("express").Router();

router.post("/create-profile", async (req, res) => {
  try {
    const data = req.body;
    // If some fields are missing, set them to empty strings or empty arrays

    if (!data.skills) data.skills = {};
    if (!data.social) data.social = {};
    if (!data.experience) data.experience = [];
    if (!data.education) data.education = [];
    if (!data.certifications) data.certifications = [];
    if (!data.learningGoals) data.learningGoals = [];
    if (!data.hobbies) data.hobbies = [];
    if (!data.interests) data.interests = [];
    const profile = new Profile(data);
    await profile.save();
    const ObjProfile = profile.toObject();
    res.status(200).send({
      ...ObjProfile,
      url: `/t/@${ObjProfile.username}`,
      status: 200,
      message: "SUCCESS",
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/read", async (req, res) => {
  try {
    const profile = await Profile.find();
    res.status(200).send(profile);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/get-profile", async (req, res) => {
  try {
    const profile = await Profile.findOne({ username: req.body.username });
    if (!profile) {
      res.status(404).send({ message: "Profile not found" });
      return;
    }
    res.status(200).send({
      ...profile.toObject(),
      status: 200,
      message: "SUCCESS",
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/get-basic-profile", async (req, res) => {
  try {
    const profile = await Profile.find(
      {},
      { name: 1, username: 1, email: 1, _id: 1, about: 1, location: 1 }
    );
    res.status(200).send(profile);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
