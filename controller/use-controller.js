const User = require("../schema/user-schema");
//add user logic
const addUser = async (req, res) => {
    // console.log("called")
    const user= req.body
    // console.log(user)
  try {
    const { username, email, name } = req.body;
    const userExist = await User.findOne({ username });
    if (userExist) {
      return res.status(400).json({ msg: "User already exists" });
    }
    // Create a new user
    const userCreated = await User.create({
      username,
      email,
      name,
    });
    res.status(201).json({
      userCreated,
      userId: userCreated._id.toString(),
      message: "User added successfully",
    });
  } catch (error) {
    console.error("The Error in adding user is ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
//fetch user logic
const fetchUser=async(req, res)=>{
  try {
    const response= await User.find({})
    // console.log(response)
    res.status(200).json(response)
    
  } catch (error) {
    console.log('the error while getting the data is ', error.message)
  }
}
const fetchByid = async(req,res)=>{
  // console.log(req.params)
  try {
    const response= await User.find({_id:req.params.id})
    // console.log('the data by id is ',response)
    res.status(200).json(response)
  } catch (error) {
    console.log('the error while getting the data by id is ', error.message)
  }
}
//udate controller.js
const editUser= async (req, res) => {
  console.log('Update route hit');
  try {
      console.log('Update route hit');
    const _id = req.params.id;
    const updateData = req.body;

    console.log('Updating user with ID:', _id);
    console.log('Update data:', updateData);

    const updatedUser = await User.findByIdAndUpdate(_id, updateData, { new: true });

    if (updatedUser) {
      console.log('Updated user data:', updatedUser);
      res.json(updatedUser);
    } else {
      console.log('User not found');
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
//delete controller logic
const deleteUser= async(req,res)=>{
  try {
    const id= req.params.id
    const Delete =await User.deleteOne({_id:id})
    console.log("delete field", Delete)
    return res.status(200).json({msg:"delete sucessfully"})
  } catch (error) {
    console.log("The Error in deleting the user is", error.messagge)
  }
}
module.exports = { addUser, fetchUser, fetchByid, editUser, deleteUser };
 