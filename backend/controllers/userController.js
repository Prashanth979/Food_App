const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const UserModel = require("../models/User");


const registerUser = async(req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    //find whether email already exists or not
    const user = await UserModel.findOne({email:email}) // this wil return true or false
    if(user){
        res.send("User alreay exist")
    }

    //hash the password
   const salt = await bcrypt.genSalt(10)
   //encrypt the password
   const hashedPassword = await bcrypt.hash(password,salt)
   //save in the database
   const newUser = new UserModel({name:name,email:email,password:hashedPassword})
   const savedUser = newUser.save() // here user is saved
   //create a jwt and return a token
   const token = jwt.sign({userId:savedUser._id},"34567")
    console.log(req.body)
    res.json({user: newUser,token})

    // console.log(req.body)
    // res.send("UserRegister")
};

//loginuser logic
const loginUser = async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    //above 2 lines can be written as 
    // const {email,password} =req.body;
    
    const user = await UserModel.findOne({email:email})
    if(!user){
        res.send("User not found")
    }
    //comparing the password
    const match = await bcrypt.compare(password, user.password)
    if(!match){
        res.send("Password does not match")
    }
    const token = jwt.sign({userId: user._id}, "34567")
    console.log(req.body)
    res.send({user:user, token})
};


// const registerUser = (req, res) => {
//     console.log(req.body)
//     res.send("Okay registered")
// };

module.exports = {registerUser,loginUser}
// module.exports = (registerUser)
// module.exports = (loginUser)