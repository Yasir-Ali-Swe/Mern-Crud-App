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
export const getOne = async (req, resp) => {
  try {
    const id = req.params.id;
    if (!id) {
      return resp.status(404).json({ msg: "User not exist." });
    }
    const user = await User.findById(id);
    return resp.status(200).json(user);
  } catch (error) {
    console.log("Error  =>", error);
  }
};

export const deleteOne = async (req, resp) => {
  try {
    const id = req.params.id;
    if (!id) {
      return resp.status(404).json({ msg: "User not exist." });
    }
    let deletedUser = await User.findByIdAndDelete(id);
    return resp.status(200).json({ msg: "User deleted successfully" });
  } catch (error) {}
};
export const updateOne = async (req, resp) => {
  try {
    const id = req.params.id;
    if (!id) {
      return resp.status(404).json({ msg: "User not exist." });
    }
    let upDatedUser = await User.findByIdAndUpdate(id, req.body, {
      return: true,
    });
    resp.status(200).json(upDatedUser);
  } catch (error) {}
};
