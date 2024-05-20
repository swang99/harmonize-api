import mongoose, { Schema } from 'mongoose';

const ProfileSchema = new Schema({
  userID: String,
  name: String,
  email: String,
  followers: [String],
  following: [String],
  posts: [],
  photo: String,
  highlights: [],
  topTracks: [],
  topArtists: [],
  playlists: [],
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

const Profile = mongoose.model('Profile', ProfileSchema);
export default Profile;
