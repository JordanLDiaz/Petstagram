export class Post {
  constructor(data) {
    this.upvoteIds = data.upvoteIds;
    this.downvoteIds = data.downvoteIds;
    this.commentIds = data.commentIds;
    this.comments = data.comments || [];
    this.picture = data.picture;
    this.posterId = data.posterId;
    this.poster = data.poster || {};
    this.title = data.title;
    this.commentCount = data.commentCount;
    this.body = data.body;
    this.species = data.species;
  }

  get PostTemplate() {
    return `
  <article class="post bg-secondary text-white flex-column justify-content-between fs-3 elevation-2 rounded">
    <div class="d-flex gap-3 justify-content-between p-1">
      <img class="userPicture" src="${this.poster.picture ?? ""}">
      <div class="user">${this.poster.name}</div>
    </div>
    <button class="postButton " data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img class="postImage" src="${this.picture}">

    </button>
    <div class="d-flex justify-content-between p-1 fs-5 ps-2 pe-2 align-items-center">
      <div class="d-flex fs-3 voteButton px-2 gap-1">
        <i class="mdi mdi-message "></i>
        <p>${this.commentCount}</p>
      </div>
      <div class="d-flex gap-2">
        <div class="d-flex align-items-center gap-1 fs-3 text-success voteButton px-2">
          <i class="mdi mdi-arrow-up "></i>
          <p class="">${this.upvoteIds.count}</p>
        </div>
        <div class="d-flex align-items-center gap-1  fs-3 text-warning voteButton px-2">
          <i class="mdi mdi-arrow-down"></i>
          <p class="">${this.downvoteIds.count}</p>
        </div>
      </div>
    </div>
  </article>`;
  }

  static getPostForm() {
    return `<div class="modal-header">
    <h1 class="modal-title fs-5" id="exampleModalLabel">Post An Animal</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>

  <form class="row" onsubmit="app.postsController.createPost()">
    <div class="modal-body">
      <div class="form-floating mb-3 col-12">
        <input type="text" class="form-control" id="name" name="name" placeholder="Bird Name">
        <label for="name">Bird Name</label>
      </div>
      <div class="form-floating mb-3 col-12">
        <input required type="url" class="form-control" id="img" name="img" placeholder="Bird Image">
        <label for="img">Bird Image</label>
      </div>
    <div class="col-12">
    <select name="size" class="form-select" id="size">
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
      <option value="chunko">Chonker</option>
    </select>
    </div>
     <div class="col-12 pt-4">
     <div class="form-check">
     <input class="form-check-input" type="checkbox" id="canFly"  name="canFly">
       <label class="form-check-label" for="gridCheck">
         Can it fly?
      </label>
     </div>
    </div>
    <div>
    <div class="modal-footer">
      <button type="button" class="btn bird-btn" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn bird-btn-green">Submit</button>
    </div>
  </form>`
  }
}
