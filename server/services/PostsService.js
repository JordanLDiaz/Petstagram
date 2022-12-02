// import { logger } from "../../ser/app/Utils/Logger.js";
import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";
import { logger } from "../utils/Logger.js";

class PostsService {
  async createPost(body) {
    const post = await dbContext.Posts.create(body);
    await post.populate("poster", "name");
    return post;
  }

  async getAllPosts() {
    const posts = await dbContext.Posts.find().populate(
      "poster",
      "name picture"
    );
    return posts;
  }
  async getPostDetails(postId) {
    const post = await dbContext.Posts.findById(postId).populate(
      "poster",
      "name picture"
    );
    await post.populate("comments");
    return post;
  }

  async deletePost(userId, postId) {
    const post = await dbContext.Posts.findById(postId);
    logger.log(post.id);
    logger.log(userId);
    if (post) {
      if (userId == post.posterId) {
        return await dbContext.Posts.findByIdAndDelete(postId);
      } else {
        throw new Forbidden("YOU ARE NOT THE PERSON THAT MADE THAT POST");
      }
    } else {
      throw new BadRequest("Cant find a post with that ID");
    }
  }
}

export const postsService = new PostsService();
