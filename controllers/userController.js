const { getAllUsers,  getUserById, updateUserById, createUser, deleteUser } = require("../models/userModel");

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

    let dataRole;

    dataRole = {

        role_id:2,
        ...req.body
    }

    try {

        if(dataRole) {

            data = await createUser(dataRole)

            return res.status(200).json({

                ok:true,
                msg: 'User created successfully',
                data
            })
        }
        
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
        
        data = await deleteUser(id)
        console.log(id)
        
        return res.status(200).json({

            ok:true,
            msg: `User ${data.rows.name} deleted successfully.`,
            data
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