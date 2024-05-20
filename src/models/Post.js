import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
  spotify_url: String,
  created: Date,
  media_type: String,
  author: String,
  createdAt: { type: Date, default: Date.now },
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

const PostModel = mongoose.model('Post', PostSchema);
export default PostModel;
