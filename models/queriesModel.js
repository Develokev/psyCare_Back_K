const queries = {

    allUsersQuery:`
    SELECT u.name,u.last_name,u.email,u.password,u.avatar,roles.role
    FROM users AS u
    INNER JOIN roles ON u.role_id = roles.role_id`,

    oneUserByEmailQuery:`
    SELECT u.name,u.last_name,u.email,u.password,u.avatar, roles.role
    FROM users AS u
    INNER JOIN roles ON u.role_id = roles.role_id
    WHERE u.email=$1
    ORDER BY u.name`,

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
    WHERE user_id=$1`
}

const appoQueries = {

    allAppoQuery:`
    SELECT a.apponame,a.appodate,a.appotime,users.user_id
    FROM appointments AS a
    INNER JOIN users ON a.user_id = users.user_id`,

    apposById:`
    SELECT u.name,u.last_name,u.email,u.password,u.avatar, roles.role
    FROM users AS u
    INNER JOIN roles ON u.role_id = roles.role_id
    WHERE u.email=$1
    ORDER BY u.name`,

}


module.exports = queries; appoQueries;