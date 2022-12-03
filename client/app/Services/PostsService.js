
import { appState } from "../AppState.js";
import { Post } from "../Models/Post.js";

class PostsService {
  async getAllPosts() {
    const res = await axios.get("api/posts");
    console.log(res);
    appState.posts = res.data.map((p) => new Post(p));
  }

  async createPost(formData) {
    const res = await axios.post("api/posts", formData);
    console.log(res);
    appState.posts = [...appState.posts, new Post(res)];
  }



}

export const postsService = new PostsService();
