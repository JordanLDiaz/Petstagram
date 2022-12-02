import { dbContext } from "../db/DbContext.js"


class PostsService {

    async createPost(body) {
        const post = await dbContext.Posts.create(body)
        await post.populate('poster', 'name')
        return post
    }

    async getAllPosts(query) {
        const posts = await dbContext.Posts.find(query).populate('')
        return posts
    }
}


export const postsService = new PostsService()