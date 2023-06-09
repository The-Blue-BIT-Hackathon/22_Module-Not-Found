const bcrypt = require('bcrypt')
const User = require('../models/users')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
// const app=express();
// app.use(express.json());




const register = async (req, res) => {

  try {
    console.log(req.method,req.url);
    console.log(req.body);
    try {
      const find = await User.findOne({ username: req.body.username });
      if (find == null) {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        //Create New User
        const user = new User({
          username: req.body.username,
          email: req.body.email,
          firstName:req.body.firstname,
          lastName:req.body.lastname,
          password: hashPassword
        });
        const person = await user.save();
        // const token = jwt.sign({ id: person._id, email: req.body.email }, process.env.SECRET_KEY, { expiresIn: '1d' })
        // res.status(200).cookie('token', token, { httpOnly: true }).json({ person, token: token });
        res.status(200).json({person:person});
      }
      else {
        res.status(403).json('already registered with us please login');
      }
    }
    catch (err) {
      console.log(err);
    }
    //Save New User and return response

  }
  catch (err) {
    console.log(err);
  }
}


 const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user != null && user != undefined) {
      const Validpassword = await bcrypt.compare(req.body.password, user.password)
      if (!Validpassword) res.status(400).json('Wrong password  please try again !!')

      else {
        const token = jwt.sign({ id: user._id, email: req.body.email },process.env.SECRET_KEY, { expiresIn: '1d' })
        console.log(`asking for jwt token details :${req.cookies.jwtoken.secret}`);
        res.status(200).cookie("jwtoken", token, { httpOnly: true }).json({ user, token: token });
        // res.status(200).json(user);
      }
    }
    else
      res.status(404).json("User not found please register");


  } catch (err) {
    console.log(err);
  }
}

const trainSchedules=async(req,res)=>{
  
  src_code=get_station_codes(req.params.srcCity.toUpperCase());
  dest_code=get_station_codes(req.params.destCity.toUpperCase());

  // console.log('get Src and destination city: ',src_code,dest_code)

  const options = {
    method: 'GET',
    url: 'https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations',
    params: {fromStationCode: src_code, toStationCode: dest_code},
    headers: {
      'X-RapidAPI-Key': '4a6d3ede98mshe92ec2c19da2da7p138868jsna5091e38344a',
      'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
    res.status(200).json(response.data);
  }).catch(function (error) {
    console.error(error);
    res.status(404).json(error);
  });
}



module.exports={register,login,trainSchedules}