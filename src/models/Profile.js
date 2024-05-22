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

const ProfileSchema = new Schema({
  userID: { type: String, required: true },
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  followers: { type: [String], default: [] }, 
  following: { type: [String], default: [] },
  photo: { type: String, default: ''},
  posts: { type: Array , default: [] },
  highlights: { type: Array , default: [] },
  topTracks: { type: Array, default: [] },
  topArtists: { type: Array, default: [] },
  playlists: { type: Array, default: [] },
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

ProfileSchema.index({ userID: 'text', name: 'text' });

const Profile = mongoose.model('Profile', ProfileSchema);
export default Profile;
