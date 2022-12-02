import { postsService } from "../Services/PostsService.js";
import { Pop } from "../Utils/Pop.js";

export class PostsController {
  constructor() {
    console.log("hello from posts controller");

  }

  async getAllPosts() {
    try {
      await postsService.getAllPosts()
    } catch (error) {
      Pop.error(error.message)
    }
  }
}