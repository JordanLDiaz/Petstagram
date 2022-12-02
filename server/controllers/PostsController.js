import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import { postsService } from "../services/PostsService.js";
import BaseController from "../utils/BaseController.js";

export class PostsController extends BaseController {
  constructor() {
    super("api/posts");
    this.router
      .get("", this.getAllPosts)
      .get("/:id", this.getPostDetails)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.createPost)
      .post("/:id", this.commentOnPost)
      .delete("/:id", this.deletePost);
  }
  async getAllPosts(req, res, next) {
    try {
      const posts = await postsService.getAllPosts();
      return res.send(posts);
    } catch (error) {
      next(error);
    }
  }

  async getPostDetails(req, res, next) {
    try {
      const posts = await postsService.getPostDetails(req.params.id);
      return res.send(posts);
    } catch (error) {
      next(error);
    }
  }
  async createPost(req, res, next) {
    try {
      req.body.posterId = req.userInfo.id;
      const post = await postsService.createPost(req.body);
      return res.send(post);
    } catch (error) {
      next(error);
    }
  }

  async commentOnPost(req, res, next) {
    try {
      req.body.posterId = req.userInfo.id;
      const post = await commentsService.createComment(req.body, req.params.id);
      return res.send(post);
    } catch (error) {
      next(error);
    }
  }

  async deletePost(req, res, next) {
    try {
      const post = await postsService.deletePost(
        req.userInfo.id,
        req.params.id
      );
      return res.send(post);
    } catch (error) {
      next(error);
    }
  }
}
// ahh
