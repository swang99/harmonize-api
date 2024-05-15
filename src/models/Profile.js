import mongoose, { Schema } from 'mongoose';

const ProfileSchema = new Schema({
  name: String,
  email: String,
  followers: [String],
  following: [String],
  highlights: [],
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

const ProfileModel = mongoose.model('Post', ProfileSchema);
export default ProfileModel;
