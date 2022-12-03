import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";
import { logger } from "../utils/Logger.js";

class CommentsService {
  constructor() {
    console.log("hello from comments Service");
  }

  async createComment(commentData, postId) {
    let post = await dbContext.Posts.findById(postId);
    if (post) {
      let comment = await dbContext.Comments.create(commentData);
      post.commentIds.push(comment.id);
      post.save();
      comment.populate();
      return comment;
    } else {
      return new BadRequest("Post at " + postId + " not found");
    }
  }
  async deleteComment(userId, id) {
    const comment = await dbContext.Comments.findById(id);
    if (comment) {
      if (userId == comment.posterId.toString()) {
        await comment.remove()
        return comment
        //     return await dbContext.Comments.findByIdAndDelete(id);
        //   } else {
        //     throw new BadRequest("Can't find a comment with that ID")
        //   }
      } else {
        throw new Forbidden("YOU ARE NOT THE PERSON THAT MADE THIS COMMENT");
      }
    }
  }
  async updateComment(userId, commentData) {
    const updatedComment = await dbContext.Comments.findByIdAndUpdate(userId, commentData)
    return updatedComment
  }
}

export const commentsService = new CommentsService();
