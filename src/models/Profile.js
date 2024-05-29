import mongoose, { Schema } from 'mongoose';

const CommentSchema = new Schema({
	author: { type: String },
	name: { type: String },
	comment: { type: String },
	createdAt: { type: Date, default: Date.now },
  }, {
	toObject: { virtuals: true },
	toJSON: { virtuals: true },
});

const PostSchema = new Schema({
  id: { type: String },
  type: { type: String},
  description: { type: String},
  comments: { type: [CommentSchema], default: [] },
  likes: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
  songName: { type: String, default: '' },
  artists: { type: String, default: '' },
  imageURL: { type: String, default: '' },
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
  recommendations: { type: Array, default: [] },
  recommendationsLastUpdated: { type: Date, default: Date.now() - (24 * 60 * 60 * 1000) },
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

ProfileSchema.index({ userID: 'text', name: 'text' });

const Profile = mongoose.model('Profile', ProfileSchema);
export default Profile;