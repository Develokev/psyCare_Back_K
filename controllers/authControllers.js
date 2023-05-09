const bcrypt = require('bcrypt');
const {generateToken} = require('../helpers/generateJWT');
const { loginModel, getUserByEmail } = require('../models/userModel');

//LOGIN
const loginControl = async (req,res) => {

    console.log(req.body)
    const {email,password} = req.body;

    try {
        const emailOK = await loginModel(email)

        const [{email:loginEmail, password:loginPassword}] = emailOK

        const passCheck = bcrypt.compareSync(password, loginPassword)

        console.log('esto es passCheck', passCheck)

        if(!loginEmail || passCheck == false) {

            return res.status(400).json({

                ok:false,
                msg: 'Email-password incorrect'
            })

        } else {

            const token = await generateToken(emailOK.user_id, emailOK.user_name)

            return res.status(200).json({

                ok:true,
                msg: 'Successfully logged in',
                token,
                user: emailOK[0]
            })
        }

    } catch (error) {
        
        return res.status(500).json({

            ok:false,
            msg: 'FAILED to log in (Controller), please, contact administrator.'
        })
    }
}

//Get one user by Email
const getUserByEmailControl = async (req,res) => {

    let data;
    const email= req.params.email;

    try {

        if(email) {

            data = await getUserByEmail(email)

            return res.status(200).json({

                ok:true,
                data
            })
        }

    } catch (error) {
        
        res.status(500).json({

            ok:false,
            msg: 'FAILED getting user by EMAIL (Controller), please, contact administrator'
        })
    }
}



module.exports = {

    loginControl,
    getUserByEmailControl
}