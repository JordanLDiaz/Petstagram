import { Schema } from "mongoose";

export const PostSchema = new Schema(
  {
    title: { type: String, required: true, minLength: 2, maxLength: 20 },
    img: { type: String, required: true, maxLength: 400 },
    description: { type: String, required: false, maxLength: 500 },
    // species: {
    //   type: String,
    //   enum: ["dog", "cat", "fish", "birds", "reptiles", "amphibians", "other"],
    //   required: false,
    // },
    posterId: { type: Schema.Types.ObjectId, required: true, ref: "Account" },
    upvoteIds: [
      { type: Schema.Types.ObjectId, required: true, ref: "Account" },
    ],
    downvoteIds: [
      { type: Schema.Types.ObjectId, required: true, ref: "Account" },
    ],
    commentIds: [
      { type: Schema.Types.ObjectId, required: true, ref: "Comment" },
    ],
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

PostSchema.virtual("poster", {
  localField: "posterId",
  foreignField: "_id",
  justOne: true,
  ref: "Account",
});

PostSchema.virtual("comments", {
  localField: "commentIds",
  foreignField: "_id",
  ref: "Comment",
});

PostSchema.virtual("commentCount").get(function () {
  return this.commentIds.length;
});
PostSchema.virtual("upvoteCount").get(function () {
  return this.upvoteIds.length;
});
PostSchema.virtual("downvoteCount").get(function () {
  return this.downvoteIds.length;
  //   aghh
});
PostSchema.virtual("totalVotes").get(function () {
  return this.downvoteIds.length + this.upvoteIds.length;
});
