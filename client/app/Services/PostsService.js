import { appState } from "../AppState.js";
import { Post } from "../Models/Post.js";

class PostsService {
  async getAllPosts() {
    const res = await axios.get("api/posts");
    appState.posts = res.data.map((p) => new Post(p));
    console.log(appState.posts, "posts");
  }

  async addPost(data) {
    const res = await axios.post("api/posts", data);
    console.log(res);
    appState.posts = [...appState.posts, new Post(res)];
  }
}

export const postsService = new PostsService();
