import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class CommentsService {
  constructor() {
    console.log("hello from comments Service");
  }

  async createComment(data, postId) {
    let post = await dbContext.Posts.findById(postId);
    if (post) {
      let comment = await dbContext.Comments.create(data);
      post.commentIds.push(comment.id);
      post.save();
      comment.populate();
      return comment;
    } else {
      return new BadRequest("Post at " + postId + " not found");
    }
  }
}

export const commentsService = new CommentsService();
