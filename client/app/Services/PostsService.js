import { Server } from "socket.io"
import { appState } from "../AppState.js"
import { Post } from "../Models/Post.js"

class PostsService {
  async getAllPosts() {
    const res = await Server.getAllPosts('api/posts')
    appState.posts = res.data.map(p => new Post(p))
    console.log(appState.posts, 'posts');
  }

}

export const postsService = new PostsService()