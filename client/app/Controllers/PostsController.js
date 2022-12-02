import { appState } from "../AppState.js";
import { postsService } from "../Services/PostsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPosts() {
  let template = "";
  appState.posts.forEach((p) => (template += p.PostTemplate));
  setHTML("posts", template);
}

export class PostsController {
  constructor() {
    appState.on("posts");
    console.log("hello from posts controller");
    postsService.getAllPosts();
  }

  async getAllPosts() {
    try {
      await postsService.getAllPosts();
    } catch (error) {
      Pop.error(error.message);
    }
  }

  async addPost() {
    window.event.preventDefault();
    let data = getFormData(window.event.target);
    postsService.addPost(data);
  }
}
