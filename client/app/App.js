import { AuthController } from "./Controllers/AuthController.js";
import { PostsController } from "./Controllers/PostsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { Post } from "./Models/Post.js";

class App {
  authController = new AuthController();
  valuesController = new ValuesController();
  postsController = new PostsController();
  activePost = null;
}

// @ts-ignore
window.app = new App();
