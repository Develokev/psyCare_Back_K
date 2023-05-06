const { getAllUsers,  getUserById, updateUserById, createUser, deleteUser } = require("../models/userModel");
const bcrypt = require('bcrypt');

const getAllUsersControl = async (req,res) => { //*operative
   
    let data;

    try {

        data = await getAllUsers()
        
        if(data) {

            return res.status(200).json({

                ok:true,
                data
            })
        }

    } catch (error) {
        
        res.status(500).json({
            ok:false,
            msg: 'FAILED getting all users (Controller), please, contact administrator'
        })
    }
}

const getUserByIdControl = async (req,res) => { //*operative

    let data;
    const id= req.params.id;

    try {

        if(id) {

            data = await getUserById(id)

            return res.status(200).json({

                ok:true,
                data
            })
        }

    } catch (error) {
        
        res.status(500).json({

            ok:false,
            msg: 'FAILED getting user by ID (Controller), please, contact administrator'
        })
    }
}

const createUserControl = async (req,res) => { //*operative

    let dataRole, data;

    const salt = bcrypt.genSaltSync(10);
    req.body.password = bcrypt.hashSync(req.body.password, salt);

    dataRole = {

        role_id: req.body.role_id || 2,
        avatar: req.body.avatar || 'https://t.ly/SVHy',
        ...req.body
    }

    try {
           await createUser(dataRole)

            return res.status(200).json({

                ok:true,
                msg: 'User created successfully',
                dataRole
            })

    } catch (error) {
        
        return res.status(500).json({

            ok:false,
            msg: ('FAILED to create new user. Please contact administrator')
        })

    }


}

const updateUserControl = async (req,res) => { //*operative

    let data, id;
    id= req.params.id;
    
    try {

        if(id) {

            data = await updateUserById(req.body, id)

            return res.status(200).json({

                ok:true,
                msg: 'User updated correctly',
                data
            })
        }

    } catch (error) {
        
        res.status(500).json({
            ok:false,
            msg: 'FAILED updating user (Controlller), please, contact administrator.'
        })
    }
}

const deleteUserControl = async (req,res) => { //!operative - missing validation when empty

    let id, data;
    id = req.params.id;

    if(id) {

        try {
        
        const cosa= await deleteUser(id)
        console.log('esto es cosa en el controller', cosa)
        
        return res.status(200).json({

            ok:true,
            msg: `User ${data.rows} deleted successfully.`,

        })

        } catch (error) {
            
            return res.status(500).json({

                ok:false,
                msg: 'FAILED deleting user. Please, contact administrator'
            })
    
        }
    }
}

module.exports = {

    getAllUsersControl,
    getUserByIdControl,
    createUserControl,
    updateUserControl,
    deleteUserControl
}