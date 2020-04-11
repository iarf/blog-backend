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
    const posts = prisma.post.findMany();
    return posts;
}

module.exports = {
    post,
    posts,
}