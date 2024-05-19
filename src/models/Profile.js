import mongoose, { Schema } from 'mongoose';

const ProfileSchema = new Schema({
  userID: { type: String, required: true },
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  followers: { type: [String], default: [] }, 
  following: { type: [String], default: [] },
  posts: { type: [PostSchema] , default: [] },
  highlights: { type: [PostSchema] , default: [] },
  topTracks: { type: Array, default: [] },
  topArtists: { type: Array, default: [] },
  playlists: { type: Array, default: [] },
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

const Profile = mongoose.model('Profile', ProfileSchema);
export default Profile;
