import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
  trackID: { type: String },
  mediaType: { type: String},
  description: { type: String},
  comments: { type: [String], default: [] },
  likes: { type: [String], default: [] },
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
  posts: { type: [PostSchema] , default: [] },
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