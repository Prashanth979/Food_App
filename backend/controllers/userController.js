const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the user already exists
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save the user in the database
        const newUser = new UserModel({ name, email, password: hashedPassword });
        const savedUser = await newUser.save();

        // Create a JWT token
        const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET || "default_secret");

        res.status(201).json({ user: savedUser, token });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare the password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ message: "Password does not match" });
        }

        // Create a JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || "default_secret");

        res.status(200).json({ user, token });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = { registerUser, loginUser };









// *************************************************

// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken")
// const UserModel = require("../models/User");


// const registerUser = async(req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;
//     //find whether email already exists or not
//     const user = await UserModel.findOne({email:email}) // this wil return true or false
//     if(user){
//         res.send("User alreay exist")
//     }

//     //hash the password
//    const salt = await bcrypt.genSalt(10)
//    //encrypt the password
//    const hashedPassword = await bcrypt.hash(password,salt)
//    //save in the database
//    const newUser = new UserModel({name:name,email:email,password:hashedPassword})
//    const savedUser = newUser.save() // here user is saved
//    //create a jwt and return a token
//    const token = jwt.sign({userId:savedUser._id},"34567")
//     console.log(req.body)
//     res.json({user: newUser,token})

//     // console.log(req.body)
//     // res.send("UserRegister")
// };

// //loginuser logic
// const loginUser = async(req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     //above 2 lines can be written as 
//     // const {email,password} =req.body;
    
//     const user = await UserModel.findOne({email:email})
//     if(!user){
//         res.send("User not found")
//     }
//     //comparing the password
//     const match = await bcrypt.compare(password, user.password)
//     if(!match){
//         res.send("Password does not match")
//     }
//     const token = jwt.sign({userId: user._id}, "34567")
//     console.log(req.body)
//     res.send({user:user, token})
// };


// // const registerUser = (req, res) => {
// //     console.log(req.body)
// //     res.send("Okay registered")
// // };

// module.exports = {registerUser,loginUser}
// // module.exports = (registerUser)
// // module.exports = (loginUser)/



