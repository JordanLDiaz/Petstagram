**_.env_**

```
NODE_ENV=dev
CONNECTION_STRING=mongodb+srv://Drok:Drok@cluster0.1n8rkgx.mongodb.net/SocialForum?retryWrites=true&w=majority
PORT=3000
AUTH_DOMAIN=dev-0v0iohje0isldio2.us.auth0.com
AUTH_AUDIENCE=https://classroom.com
AUTH_CLIENT_ID=lIY9KEl09Moz356G94mNTHWIfx3Erj5I
```

# PETSTAGRAM

Your favorite website for discovering pets and then judging them harshly!

## Trello

https://trello.com/b/5WnuGC3S/socialforummg

## Backened Team

Julio
Lucas

## Frontend

Derek
Jordan

# Schema

Posts > comments > comments recursivly

Posts. upvotes, downvotes, total votes, commentIDs[], **comments, picture, posterId, **poster, title, commentCount , description, species, STRETCH Categories
Comments. upvotes, downvotes, total votes, commmentsIds[], **comments, ReplyCount, posterId[], **poster, body,

# API

All Posts : /api/posts
Post Details / Comments : api/posts/ID

Add Post : post/api/posts
Add Comment : post/api/posts/id
Add comment to comment post/api/comments/id

Remove Post delete/api/posts/id
Remove comment delete/api/comments/id

Edit post put/api/posts/id
Edit Comment put/api/comments/id
