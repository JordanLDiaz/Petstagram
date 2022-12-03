import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import BaseController from "../utils/BaseController.js";

export class CommentsController extends BaseController {
  constructor() {
    super("api/comments");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .delete("/:id", this.deleteComment)
      .put("/:id", this.updateComment)
  }
  async deleteComment(req, res, next) {
    try {
      const comment = await commentsService.deleteComment(
        req.userInfo.id,
        req.params.id
      );
      return res.send(comment)
      // res.send("deloreted")
    } catch (error) {
      next(error)
    }
  }

  async updateComment(req, res, next) {
    try {
      const updatedComment = await commentsService.updateComment(req.params.userId, req.body)
      return res.send(updatedComment)
    } catch (error) {
      next(error)
    }
  }
}