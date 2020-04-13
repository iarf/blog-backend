const { APP_SECRET, authUser } = require('../utils');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken')

const prisma = new PrismaClient();

const signup = async (parent,args,context,info) => {
    const password = await bcrypt.hash(args.password,10);
    const exists = await prisma.user.findOne({ where: { email: args.email } });
    if (exists) {
        throw new Error('User already exists with that email!');
    }else{
        await prisma.user.create({
            data: {
                email: args.email,
                password: password,
                first_name: args.first_name,
                last_name: args.last_name
            }
        });
        return 'User created!';
    }
}
const login = async (parent,args,context,info) => {
    const user = await prisma.user.findOne({ where: { email: args.email } });
    if (!user){
        throw new Error('User not found!');
    }
    const valid = await bcrypt.compare(args.password,user.password);
    if (!valid){
        throw new Error('Password invalid');
    }
    const token = await jwt.sign({ user_id: user.userId }, APP_SECRET);
    return {
        token,
        user,
    }
}
const post = async (parent,args,context,info) => {
    await authUser(context);
    await prisma.post.create({
        data: {
            title: args.title,
            content: args.content,
            thumbnail: args.thumbnail,
            posted: args.posted
        }
    });
    return('Post created.');
}
const deletePost = async (parent,args,context,info) => {
    await authUser(context);
    await prisma.post.delete({
        where: {
            post_id: parseInt(args.post_id)
        }
    });
    return('Post deleted.');
}
const updatePost = async (parent,args,context,info) => {
    await authUser(context);
    await prisma.post.update({
        where: {
            post_id: parseInt(args.post_id)
        },
        data: {
            title: args.title,
            content: args.content,
            posted: args.posted
        }
    });
    return('Post updated.');
}

module.exports = {
    signup,
    login,
    post,
    deletePost,
    updatePost
}