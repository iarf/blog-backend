const jwt = require('jsonwebtoken');
const APP_SECRET = 'you-should-change-this';

const authUser = (context) => {
    const token = context.token.replace('Bearer ','');
    if(token){
        const { user_id } = jwt.verify(token, APP_SECRET);
        return user_id;
    }
    throw new Error('User not authenticated!');
}

module.exports = {
    APP_SECRET,
    authUser
}