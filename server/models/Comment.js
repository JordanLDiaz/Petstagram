import { Schema } from "mongoose";

export const CommentSchema = new Schema(
  {
    body: { type: String, required: true, maxLength: 500 },
    posterId: { type: Schema.Types.ObjectId, required: true, ref: "Account" },
    upvoteIds: [
      { type: Schema.Types.ObjectId, required: true, ref: "Account" },
    ],
    downvoteIds: [
      { type: Schema.Types.ObjectId, required: true, ref: "Account" },
    ],
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

CommentSchema.virtual("poster", {
  localField: "posterId",
  foreignField: "_id",
  justOne: true,
  ref: "Account",
});

CommentSchema.virtual("upvoteCount").get(function () {
  return this.upvoteIds.length;
});
CommentSchema.virtual("downvoteCount").get(function () {
  return this.downvoteIds.length;
});
CommentSchema.virtual("totalVotes").get(function () {
  return this.downvoteIds.length + this.upvoteIds.length;
});
