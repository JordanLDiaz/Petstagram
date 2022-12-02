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
}
