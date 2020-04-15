const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const post = async (parent,args,context,info) => {
    const post = prisma.post.findOne({ where: { post_id: parseInt(args.post_id) } });
    if (!post){
        throw new Error('Post not found');
    }
    return post;
}
const posts = async (parent,args,context,info) => {
    const posts = await prisma.post.findMany({
        where:{title:{contains:args.filter}}
    });
    return posts;
}
const users = async (parent,args,context,info) => {
    const users = await prisma.user.findMany({
        select:{
            user_id: true,
            email: true,
            first_name: true,
            last_name: true,
        }
    });
    return users;
}


module.exports = {
    post,
    posts,
    users,
}