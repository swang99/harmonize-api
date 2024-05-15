import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
  url: String,
  created: Date,
  media_type: String,
  author: String,
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

const PostModel = mongoose.model('Post', PostSchema);
export default PostModel;
