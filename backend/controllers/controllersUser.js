const bcrpyt = require ('bcrypt')

async function createUser(req, res) {
    const newUser = req.body;
    console.log(newUser);
    try{
     const hashedPassword = await bcrypt.hash(newUser.password, 10);
     await User.create({...newUser, password: hashedPassword});
     res.status (201).json ({message: 'Successfully created user'})
    } catch (error) {
      console.log(error);
      res.status(500).json({message: 'Unexpected server error'})
    };
  }

const loginUser = async(req, res) => {
    const {mail, password} = req.body;
    try {
        const user = await User.findOne({where: {mail} });
        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({message: 'Incorrect password'})
        }   
        res.json({message: 'User logged in correctly'})
    } catch (error) {
        console.error(error);
        res.status(500).json ({message: 'Unexpected server error'})
}};


module.exports = {
 createUser, loginUser
}