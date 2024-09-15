import User from "../models/userControler.js";
export const create = async (req, resp) => {
  try {
    const data = new User(req.body);
    if (!data) {
      return resp.status(404).json({ msg: "No user data." });
    }
    const savedUser = await data.save();
    return resp.status(200).json(savedUser);
  } catch (error) {
    console.log("Error  =>", error);
  }
};
export const getAll = async (req, resp) => {
  try {
    const allUser = await User.find();
    if (!allUser) {
      return resp.status(404).json({ msg: "User not found." });
    }
    return resp.status(200).json(allUser);
  } catch (error) {
    console.log("Error  =>", error);
  }
};
