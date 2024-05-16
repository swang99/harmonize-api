import mongoose, { Schema } from 'mongoose';
// import Post from './Post';

const ProfileSchema = new Schema({
  userID: String,
  name: String,
  email: String,
  followers: [String],
  following: [String],
  posts: [],
  highlights: [],
  topTracks: [],
  topArtists: [],
  playlists: [],
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

const ProfileModel = mongoose.model('Post', ProfileSchema);
export default ProfileModel;
