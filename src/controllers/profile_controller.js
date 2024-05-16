import Profile from '../models/Profile';

export async function createProfile(fields) {
  const profile = new Profile();
  profile.userID = fields.userID;
  profile.name = fields.name;
  profile.email = fields.email;
  profile.followers = fields.followers;
  profile.following = fields.following;
  profile.posts = fields.posts;
  profile.highlights = fields.highlights;
  profile.topTracks = fields.topTracks;
  profile.topArtists = fields.topArtists;
  profile.playlists = fields.playlists;

  try {
    const savedProfile = await profile.save();
    return savedProfile;
  } catch (error) {
    console.log(error);
    throw new Error(`create profile error: ${error}`);
  }
}

export async function updateProfile(id, updateFields) {
  try {
    await Profile.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error(`create profile error: ${error}`);
  }
}

export async function deleteProfile(id) {
  try {
    await Profile.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error(`delete profile error: ${error}`);
  }
}

export async function getProfiles() {
  try {
    const users = await Profile.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error(`get users error: ${error}`);
  }
}

export async function getProfile(id) {
  console.log("getProfile id: ", id);
  try {
    const user = await Profile.find({userID: id});
    return user;
  } catch (error) {
    console.log(error);
    throw new Error(`create user error: ${error}`);
  }
}
