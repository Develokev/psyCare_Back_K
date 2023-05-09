const queries = {

// USERS ++++++++++++++++++++++++++

    allUsersQuery:`
    SELECT u.user_id,u.name,u.last_name,u.email,u.password,u.avatar,roles.role
    FROM users AS u
    INNER JOIN roles ON u.role_id = roles.role_id`,

    oneUserByEmailQuery:`
    SELECT u.name,u.last_name,u.email,u.password,u.avatar, roles.role
    FROM users AS u
    INNER JOIN roles ON u.role_id = roles.role_id
    WHERE u.email=$1`,

    oneUserByIdQuery:`
    SELECT u.name,u.last_name,u.email,u.password,u.avatar, roles.role
    FROM users AS u
    INNER JOIN roles ON u.role_id = roles.role_id
    WHERE u.user_id=$1
    ORDER BY u.name`,

    createUserQuery:`
    INSERT INTO users (role_id, name, last_name, email, password, avatar)
    VALUES ($1, $2, $3, $4, $5, $6)`,

    updateUserQuery:`
    UPDATE users
    SET name=$1,last_name=$2,email=$3,password=$4,avatar=$5
    WHERE user_id=$6`,

    deleteUserQuery:`
    DELETE FROM users
    WHERE user_id=$1`,

// APPOINTMENTS ++++++++++++++++++++++++++

    allAppoQuery:`
    SELECT a.appoName,a.appoDate,a.appoTime,a.appoType,a.register_date,a.appo_id,users.user_id,users.name,users.last_name,appoStatus.status
    FROM ((appointments AS a
    INNER JOIN users ON a.user_id = users.user_id)
    INNER JOIN appoStatus ON a.status_id = appoStatus.status_id)
    ORDER BY register_date DESC`,

    apposByIdQuery:`
    SELECT a.apponame,a.appodate,a.appotime,a.appotype,users.user_id,users.name,users.last_name,appoStatus.status,a.register_date
    FROM ((appointments AS a
    INNER JOIN users ON a.user_id = users.user_id)
    INNER JOIN appoStatus ON a.status_id = appoStatus.status_id)
    WHERE users.user_id=$1
    ORDER BY a.register_date DESC`,

    appoByIdQuery:`
    SELECT * FROM appointments
    WHERE appo_id=$1`,

    createAppoQuery:`
    INSERT INTO appointments (apponame,appodate,appotime,appotype,user_id,status_id)
    VALUES ($1, $2, $3, $4, $5, $6)`,

    updateAppoQuery:`
    UPDATE appointments
    SET apponame=$1,appodate=$2,appotime=$3,appotype=$4,status_id=$5
    WHERE appo_id=$6`,

    deleteAppoQuery:`
    DELETE FROM appointments
    WHERE appo_id=$1`
}

module.exports = queries;